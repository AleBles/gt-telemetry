import { EventEmitter } from 'node:events';
import * as fs from 'fs';
import * as path from 'path';

const logName = '../../data/playstation_messages.log';

export class MockServer extends EventEmitter {
    private isConnected: boolean = false;
    private logFilePath: string;

    constructor(logFileName: string = logName) {
        super();
        console.log(logFileName);
        this.logFilePath = path.join(__dirname, logFileName);
    }

    public connect(): void {
        if (this.isConnected) {
            console.log('Already connected.');
            return;
        }

        this.isConnected = true;
        console.log('MockServer connected.');

        this.emit('connect', 'mock-address', 12345);

        this.startReadingLog();
    }

    private async startReadingLog(): Promise<void> {
        const readline = require('readline');
        const interval = 1000 / 60; // Interval for 60 times a second
        const lineBuffer: string[] = [];

        const readLog = async () => {
            // console.log('READ LOG!', lineBuffer.length);

            const rl = readline.createInterface({
                input: fs.createReadStream(this.logFilePath),
                output: process.stdout,
                terminal: false
            });

            rl.on('line', (line) => {
                if (line.trim() !== '') {
                    lineBuffer.push(line);
                }
            });

            rl.on('close', () => {
                // Done
            });
        };

        let timeOut: any;
        const emitMessages = () => {
            if (false === this.isConnected) {
                clearInterval(timeOut);
                return;
            }

            if (this.isConnected && lineBuffer.length > 0) {
                this.emit('message', lineBuffer.shift());
            }

            if(this.isConnected && lineBuffer.length < 60) {
                readLog();
            }
        };

        await readLog(); // Start the initial log reading
        setInterval(() => emitMessages(), interval); // Start emitting messages at the configured interval
    }

    public close(): void {
        if (!this.isConnected) {
            console.log('Not connected.');
            return;
        }

        this.isConnected = false;
        console.log('MockServer disconnected.');
        this.emit('disconnect');
    }
}
