import React, { ReactNode, useEffect, createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { MessageType } from "../server/messages/MessageType";
import { Connect } from "../server/messages/Connect";

interface WebSocketContextType {
    ws: WebSocket | null;
    messages: string[];
    connect: (url: string, callback: () => void) => void; // Method to connect to WebSocket with a URL
    sendMessage: (message: string) => void; // Method to send a message through WebSocket
    onError: (error: Error) => void;
}

// Define the props for the WebSocketProvider, including children as ReactNode
interface WebSocketProviderProps {
    children: ReactNode;
}

const SocketContext = createContext<WebSocketContextType | null>(null);

export const SocketProvider: React.FC<WebSocketProviderProps> = ({ children = {} }) => {
    const [ws, setWs] = useState(null);
    const [messages, setMessages] = useState([]);
    const [error, onError] = useState(null);

    const connect = (url: string, callback: () => void) => {
        if (ws) {
            // Close the existing connection if it exists before creating a new one
            ws.close();
        }

        const socket = new WebSocket('ws://127.0.0.1:9191');

        socket.onopen = () => {
            console.log("✅ Connected to WebSocket:", url);
            socket.send(JSON.stringify({ type: MessageType.connect, address: url }));
        };

        socket.onmessage = (event) => {
            console.log( event.data);
            setMessages((prev) => [...prev, event.data]);
        };

        socket.onclose = () => {
            console.log("❌ WebSocket Closed");
        };

        socket.onerror = (e) => {
            onError(e);
        };

        setWs(socket);
    };

    const sendMessage = (message: string) => {
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(message);
        } else {
            console.error("⚠️ WebSocket is not connected.");
        }
    };

    // Cleanup on unmount (closes WebSocket connection if open)
    useEffect(() => {
        return () => {
            if (ws) {
                ws.close();
            }
        };
    }, [ws]);

    return (
        <SocketContext.Provider
            value={{
                ws, messages, connect, sendMessage, onError
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