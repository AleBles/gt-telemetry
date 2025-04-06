import React, { useEffect } from 'react';

import { useSocket } from '../contexts/socket-context';
import { useDashboard } from "../contexts/dashboard-context";

import VelocityMeter from '../race-components/velocity-meter'; // Use the earlier example
import GasBrakeMeter from '../race-components/gas-brake-meter'; // Placeholder for your gas/brake component
import GForceMeter from '../race-components/gforce-meter';
import RPMGauge from "../race-components/rpm-gauge";
import NavBar from "../ui/top-bar";
import { MessageType } from "../../server/Message";
import { GT7Data } from "../../server/Gt7Data";
import ThrottleIndicator from "../race-components/throttle-indicator"; // Placeholder for G forces

const Dashboard = () => {
    // const {subscribe, unsubscribe} = useSocket();

    const {
        velocity, setVelocity,
        gForces, setGForces,
        gasBrakeUsage, setGasBrakeUsage,
        rpm, setRpm,
    } = useDashboard();

    useEffect(() => {
        // subscribe(MessageType.data, (data: GT7Data) => {
        //     setGasBrakeUsage({gas: data.throttle, brake: data.brake});
        //     setRpm(data.engineRPM);
        // })
    }, [setVelocity, setGForces, setGasBrakeUsage, setRpm]);

    return (
        <div className="dashboard-container">
            <VelocityMeter />
            <GasBrakeMeter gas={gasBrakeUsage.gas} brake={gasBrakeUsage.brake} />
            <GForceMeter gForces={gForces} />
            <RPMGauge rpm={rpm} maxRPM={8000} />
            <ThrottleIndicator />
            {/* You can add more metrics here */}
        </div>
    );
}

export default Dashboard;
