import { GT7Data } from "./Gt7Data";

export enum MessageType {
    connect,
    data,
    disconnect,
    error
}

export interface Message {
    type: MessageType;
    data: GT7Data | string;
}