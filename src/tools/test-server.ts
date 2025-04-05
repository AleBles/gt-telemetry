import { Socket, createSocket, RemoteInfo } from 'node:dgram'
import { decryptBuffer} from "../server/Utils";
import { gt7parser } from '../server/Gt7Parser';

// import { createWriteStream, readFileSync } from 'fs';
//
// const data: Buffer = readFileSync('./gt-data.txt');
// const packet: Buffer = decrypt(data);
//
// console.log(data, packet);
//
// const magic = packet.readInt32LE();
// if (magic != 0x47375330) // 0S7G - G7S0
//     console.log('Magic! error!', magic);
//
// console.log(magic)
//
// process.exit(0);

//Below setup to fetch data from the ps4
const socket: Socket = createSocket('udp4');
const bindPort: number = 33740;
const receivePort: number = 33739;
const psIp: string = '192.168.0.111';

socket.on('error', (err) => {
    console.log(`server error:\n${err.stack}`);
    socket.close();
});

socket.on('message', (data: Buffer, rinfo: RemoteInfo) => {
    console.log(`server got: ${data.length} from ${rinfo.address}:${rinfo.port}`);

    if (0x128 === data.length) {
        const packet: Buffer = decryptBuffer(data);

        const magic = packet.readInt32LE();
        if (magic != 0x47375330) {
            // 0S7G - G7S0
            console.log("Magic! error!", magic);
        } else {
            const message = gt7parser.parse(packet);

            console.clear();
            console.log([
                'throtle', message.throttle,
                'brake', message.brake,
                'gear',message.currentGear,
            ]);
        }
      }
});

socket.on('listening', () => {
    const address = socket.address();
    console.log(`server listening ${address.address}:${address.port}`);
});

socket.bind(bindPort);

socket.send(Buffer.from('A'),0, 1, receivePort, psIp, (err) => {
    if (err) {
        socket.close();
        return;
    }

    console.log('data send!');
});
