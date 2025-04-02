import React from 'react';

const GasBrakeMeter = ({ gas, brake }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '100%', height: 30, backgroundColor: 'green' }}>
                <div
                    style={{
                        width: `${gas}%`,
                        height: '100%',
                        backgroundColor: 'lime',
                    }}
                ></div>
            </div>
            <div style={{ width: '100%', height: 30, backgroundColor: 'red', marginTop: 10 }}>
                <div
                    style={{
                        width: `${brake}%`,
                        height: '100%',
                        backgroundColor: 'darkred',
                    }}
                ></div>
            </div>
        </div>
    );
}

export default GasBrakeMeter;
