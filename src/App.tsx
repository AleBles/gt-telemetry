import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import { SocketProvider } from './contexts/socket-context';
import RacingDashboard from './pages/Dashboard';
import './App.css';
import Login from './pages/Login'
import { DashboardProvider } from "./contexts/dashboard-context";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <SocketProvider>
            <ToastContainer aria-label=''/>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <Login/>
                    }/>
                    <Route path="/dash" element={
                        <DashboardProvider>
                            <RacingDashboard/>
                        </DashboardProvider>
                    }/>
                </Routes>
            </BrowserRouter>
        </SocketProvider>
    );
}

export default App;
