import { WebSocket, Server as WebSocketServer } from "ws";
import { PlaystationSocket } from "./PlaystationSocket";
import { MessageType } from "./Message";
import { GT7Data } from "./Gt7Data";
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { MockServer } from './MockSocket';

// Configuration
const WS_PORT = 9191;

// Parse command line arguments
const argv = yargs(hideBin(process.argv)).option('mode', {
    alias: 'm',
    description: 'Set the mode of the server',
    choices: ['playstation', 'local'],
    default: 'playstation'
}).option('logFilePath', {
    alias: 'l',
    description: 'Set the log file path for the MockServer',
    type: 'string',
    default: null
}).argv;

// Create WebSocket server
const server: WebSocketServer = new WebSocketServer({ port: WS_PORT });

// Determine which socket to use based on the mode
let psSocket: PlaystationSocket | MockServer;
if (argv.mode === 'local') {
    console.log("Using local server");
    psSocket = new MockServer(argv.logFilePath);
} else {
    console.log("Using PlayStation server");
    psSocket = new PlaystationSocket();
}

console.log(`WebSocket server started on ws://localhost:${WS_PORT}`);

server.on("connection", (clientConnection) => {
    console.log("New WebSocket client connected.");

    clientConnection.on("message", (message) => {
        try {
            const data = JSON.parse(message.toString());

            if (data.type === MessageType.connect) {
                const host = data.address;

                console.log(`Connecting to PlayStation at ${host}`);

                if (!psSocket) {
                   //Only create PS socket when non existing, allowing the frontend to connect multiple times
                    // Create a new UDP client
                    psSocket.connect(host)
                }

                /**
                 * Pass the Data from the Ps5 to the frontend
                 */
                psSocket.on("message", (msg: GT7Data) => {
                    console.log(`Received UDP data: ${msg}`);

                    // Forward UDP data to the WebSocket client
                    if (clientConnection.readyState === clientConnection.OPEN) {
                        clientConnection.send(JSON.stringify({type:MessageType.data ,data:msg}));
                    }
                });

                /**
                 * Once the PS5 is connected we will send it to the client
                 */
                psSocket.on("connect", (err) => {
                    // Forward UDP data to the WebSocket client
                    if (clientConnection.readyState === clientConnection.OPEN) {
                        clientConnection.send(JSON.stringify({type: MessageType.connect, data: "We are connected!"}));
                    }
                })

                psSocket.on("disconnect", (err) => {
                    clientConnection.send(JSON.stringify({type: MessageType.error, data: "Playstation disconnected"}));

                    clientConnection.close();
                })

                psSocket.on('error', () => {
                    clientConnection.send(JSON.stringify({type:MessageType.error ,data:"Unable to connect to Playstation"}));

                    clientConnection.close();
                });
            }
        } catch (err) {
            console.error("Error processing message:", err);
        }
    });

    clientConnection.on("close", () => {
        console.log("WebSocket client disconnected.");
        if (psSocket) {
            psSocket.close();
            psSocket = null;
        }
    });
});
