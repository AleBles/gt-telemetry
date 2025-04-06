import React, { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { Message, MessageType } from "../../server/Message";
import { GT7Data } from "../../server/Gt7Data";

type Listener = (data: any) => void;

interface WebSocketContextType {
    connect: (url: string) => Promise<string>; // Method to connect to WebSocket with a URL
    sendMessage: (message: string) => void; // Method to send a message through WebSocket
    onError: (error: string) => void;
    subscribe: (event: string, callback: Listener) => void;
    unsubscribe: (event: string, callback: Listener) => void;
}

// Define the props for the WebSocketProvider, including children as ReactNode
interface WebSocketProviderProps {
    children: ReactNode;
}

const SocketContext = createContext<WebSocketContextType | null>(null);

export const SocketProvider: React.FC<WebSocketProviderProps> = ({ children = {} }) => {
    const socketRef = useRef<WebSocket | null>(null);
    const listeners = useRef<Record<string, Listener[]>>({});

    const connect = (url: string, promise) => {
        return new Promise((resolve, reject) => {
            socketRef.current = new WebSocket('ws://127.0.0.1:9191');

            socketRef.current.onopen = () => {
                resolve("✅ Connected to WebSocket: " + url)
                socketRef.current.send(JSON.stringify({ type: MessageType.connect, address: url }));
            };

            socketRef.current.onmessage = (event: any) => {
                const message: any = JSON.parse(event.data);

                switch (message.type) {
                    case MessageType.error:
                        listeners.current[message.type]?.forEach((callback: (data: string) => void) => callback("Unable to connect to PlayStation"));
                        break;
                    case MessageType.connect:
                        listeners.current[message.type]?.forEach((callback: (data: string) => void) => callback("Connected to PlayStation!"));
                        break;
                    case MessageType.data:
                        listeners.current[message.type]?.forEach((callback: (data: GT7Data) => void) => callback(JSON.parse(message.data) as GT7Data));
                        break;
                }
            };

            socketRef.current.onclose = () => {
                reject("❌ WebSocket Closed");
            };

            socketRef.current.onerror = (e) => {
                reject("Unable to connect to local server");
            };
        });
    };

    const sendMessage = (message: string) => {
        if (socketRef.current?.readyState === WebSocket.OPEN) {
            socketRef.current.send(message);
        } else {
            console.error("⚠️ WebSocket is not connected.");
        }
    };

    const subscribe = (event: string, callback: Listener) => {
        if (!listeners.current[event]) {
            listeners.current[event] = [];
        }
        listeners.current[event].push(callback);
    };

    const unsubscribe = (event: string, callback: Listener) => {
        listeners.current[event] = listeners.current[event]?.filter(cb => cb !== callback) || [];
    };

    // Cleanup on unmount (closes WebSocket connection if open)
    useEffect(() => {
        return () => {
            socketRef.current?.close();
        };
    });

    return (
        <SocketContext.Provider
            value={{
                unsubscribe, subscribe, connect, sendMessage
            }}
        >
            {children}
        </SocketContext.Provider>
    );
};

// Custom hook to access WebSocket context
export const useSocket = () => {
    const context = useContext(SocketContext);
    if (!context) {
        throw new Error("useWebSocket must be used within a WebSocketProvider");
    }
    return context;
};