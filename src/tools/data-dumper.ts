import { PlaystationSocket } from '../server/PlaystationSocket';
import * as fs from 'fs';
import * as path from 'path';

const psIp = '192.168.1.100'; // Replace with the actual IP address
const logName = 'playstation_messages.log';

// Create an instance of PlaystationSocket
const playstationSocket = new PlaystationSocket();

// Define the log file path
const logFilePath = path.join(__dirname, logName);

// Ensure the log file exists
fs.writeFileSync(logFilePath, '', { flag: 'a' });

// Listen for messages from the PlaystationSocket
playstationSocket.on('message', (message) => {
    fs.appendFileSync(logFilePath, message);
});

// Handle connection events
playstationSocket.on('connect', (address, port) => {
    console.log(`Connected to Playstation at ${address}:${port}`);
});

// Handle disconnection events
playstationSocket.on('disconnect', (error) => {
    console.error('Disconnected from Playstation:', error);
});

// Handle errors
playstationSocket.on('error', (error) => {
    console.error('Error:', error);
});

// Example usage: connect to a Playstation with a specific IP
playstationSocket.connect(psIp);
