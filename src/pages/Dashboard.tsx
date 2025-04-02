import React, { useEffect } from 'react';

import { useSocket } from '../contexts/socket-context';
import { useDashboard } from "../contexts/dashboard-context";

import VelocityMeter from '../race-components/velocity-meter'; // Use the earlier example
import GasBrakeMeter from '../race-components/gas-brake-meter'; // Placeholder for your gas/brake component
import GForceMeter from '../race-components/gforce-meter'; // Placeholder for G forces

const Dashboard = () => {
    const {
        ws, messages, connect, sendMessage, onError
    } = useSocket();

    const {
        velocity, setVelocity,
        gForces, setGForces,
        gasBrakeUsage, setGasBrakeUsage
    } = useDashboard();

    useEffect(() => {
        const socket = new WebSocket('ws://your-racing-data-stream-url');

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setVelocity(data.velocity);
            setGForces(data.gForces);
            setGasBrakeUsage({ gas: data.gas, brake: data.brake });
        };

        return () => {
            socket.close();
        };
    }, [setVelocity, setGForces, setGasBrakeUsage]);

    return (
        <div className="dashboard-container">
            <VelocityMeter velocity={velocity} />
            <GasBrakeMeter gas={gasBrakeUsage.gas} brake={gasBrakeUsage.brake} />
            <GForceMeter gForces={gForces} />
            {/* You can add more metrics here */}
        </div>
    );
}

export default Dashboard;
