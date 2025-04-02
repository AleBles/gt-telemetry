import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

const GForceMeter = ({ gForces }) => {
    return (
        <div style={{ width: 200, height: 200 }}>
            <CircularProgressbarWithChildren
                value={gForces}
                maxValue={3} // Max G-force
            >
                <div style={{ fontSize: 24 }}>
                    {gForces} G
                </div>
            </CircularProgressbarWithChildren>
        </div>
    );
}

export default GForceMeter;
