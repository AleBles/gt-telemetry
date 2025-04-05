import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

const VelocityMeter = ({ velocity }) => {
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
