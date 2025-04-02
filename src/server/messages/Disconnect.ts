import { Message } from "./Message";
import { MessageType } from "./MessageType";

export interface Disonnnect extends Message {
    address: string;
    type: MessageType.disconnect;
}