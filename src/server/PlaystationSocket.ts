import { Socket, createSocket, RemoteInfo } from 'node:dgram';
import { EventEmitter } from 'node:events';
import { gt7parser } from "./Gt7Parser";
import { GT7Data } from "./Gt7Data";
import  {decryptBuffer} from "./Utils";


export class PlaystationSocket extends EventEmitter {
    private socket: Socket;

    private bindPort: number = 33740;

    private receivePort: number = 33739;

    private timer: null | ReturnType<typeof setTimeout> = null

    constructor() {
        super();

        this.socket = createSocket('udp4');

        this.socket.on('error', (err) => {
            console.log(`server error:\n${err.stack}`);
            this.socket.close();
            this.emit('disconnect');
        });

        /**
         * This is where the magic happens and we receive data from the PS5 here
         */
        this.socket.on('message', (buffer: Buffer, rinfo: RemoteInfo) => {
            console.log(`server got: ${buffer.length} from ${rinfo.address}:${rinfo.port}`);

            if (this.timer) {
                this.timer = null;
                clearTimeout(this.timer);
                this.emit('connect', rinfo.address, rinfo.port);
            }

            if (0x128 === buffer.length) {
                const packet: Buffer = decryptBuffer(buffer);

                const magic = packet.readInt32LE();
                if (magic != 0x47375330) {
                    // 0S7G - G7S0
                    console.log("Magic! error!", magic);
                } else {
                    const message: GT7Data = gt7parser.parse(packet);

                    this.emit('message', message);
                }
            }
        });

        // Validate we start listening for PS5 data
        this.socket.on('listening', () => {
            const address = this.socket.address();
            console.log(`server listening ${address.address}:${address.port}`);
        });

        // Create the socket
        this.socket.bind(this.bindPort);
    }

    public close(): void {
        if (this.socket) {
            this.socket.close()
        }
    }

    public connect(playstationIp: string): void {
        // Send a tiny package, once the PS5 correcly receives it, it will start returning the data
        this.socket?.send(Buffer.from('A'),0, 1, this.receivePort, playstationIp, (err) => {
            if (err) {
                this.socket.close();
                this.emit('disconnect', err);
                return;
            }

            console.log('Init package send!');

            /**
             * Since there is no acknowledgement on UDP we set a simple timeout after the initial message
             * Once the timeout is hit we assume we can't connect, close the connection and throw an error
             */
            this.timer = setTimeout(() => {
                this.emit('error', 'Unable to connect to Playstation')
            }, 5000)
        });
    }
}