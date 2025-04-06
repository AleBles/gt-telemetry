import React, { useEffect, useState } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useSocket } from "../contexts/socket-context";
import { MessageType } from "../../server/Message";
import { GT7Data } from "../../server/Gt7Data";

const VelocityMeter = () => {
    const [velocity, setVelocity] = useState(0);
    const {subscribe, unsubscribe} = useSocket();

    useEffect(() => {
        subscribe(MessageType.data, (data: GT7Data) => {
            setVelocity(data.metersPerSecond * 3.6);
        })

        return () => {
            // TODO: sunbsubscribe
        }
    }, [velocity]);

    return (
        <div style={{ width: 200, height: 200 }}>
            <CircularProgressbarWithChildren
                value={velocity}
                maxValue={400} // Example max velocity
            >
                <div style={{ fontSize: 24 }}>
                    {velocity} km/h
                </div>
            </CircularProgressbarWithChildren>
        </div>
    );
}

export default VelocityMeter;
