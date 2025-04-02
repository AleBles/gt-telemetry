import { Message } from "./Message";
import { MessageType } from "./MessageType";

export interface Connect extends Message {
    address: string;
    type: MessageType.connect;
}