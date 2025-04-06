import React, { createContext, useState, useContext } from 'react';

const DashboardContext = createContext();

export const useDashboard = () => useContext(DashboardContext);

export const DashboardProvider = ({ children = {} }) => {
    const [velocity, setVelocity] = useState(0);
    const [gForces, setGForces] = useState(0);
    const [gasBrakeUsage, setGasBrakeUsage] = useState({ gas: 0, brake: 0 });
    const [trackPosition, setTrackPosition] = useState(0);
    const [rpm, setRpm] = useState(0);

    return (
        <DashboardContext.Provider
            value={{
                velocity, setVelocity,
                gForces, setGForces,
                gasBrakeUsage, setGasBrakeUsage,
                trackPosition, setTrackPosition,
                rpm, setRpm,
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
};