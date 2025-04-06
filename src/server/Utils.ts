import { TextEncoder } from "util";
import JSSalsa20  from 'js-salsa20';

export const decryptBuffer = (data: Buffer): Buffer => {
    const encoder: TextEncoder = new TextEncoder();
    const key: Uint8Array = encoder.encode('Simulator Interface Packet GT7 ver 0.0'); // 32 bytes key

    const nonce1: number = data.readInt32LE(64);
    const nonce2: number = nonce1 ^ 0xDEADBEAF;

    const nonce: Buffer = new Buffer(8);
    nonce.writeInt32LE(nonce2)
    nonce.writeInt32LE(nonce1, 4)

    const message: Uint8Array = new JSSalsa20(key.slice(0, 32), nonce).decrypt(data);

    const newBuffer: Buffer = new Buffer(message.byteLength)
    for (var i = 0; i < message.length; i++)
        newBuffer[i] = message[i];

    return newBuffer;
}