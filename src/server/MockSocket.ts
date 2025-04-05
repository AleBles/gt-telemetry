import { EventEmitter } from 'node:events';
import * as fs from 'fs';
import * as path from 'path';

const logName = 'playstation_messages.log';

export class MockServer extends EventEmitter {
    private isConnected: boolean = false;
    private logFilePath: string;

    constructor(logFileName: string = logName) {
        super();
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

    private startReadingLog(): void {
        const readLog = () => {
            fs.readFile(this.logFilePath, 'utf8', (err, data) => {
                if (err) {
                    this.emit('error', err);
                    return;
                }

                const messages = data.split('\n').filter(line => line.trim() !== '');
                messages.forEach(message => {
                    this.emit('message', message);
                });

                // Immediately read again to simulate continuous data
                if (this.isConnected) {
                    readLog();
                }
            });
        };

        readLog();
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
