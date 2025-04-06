import React, { useEffect, useState } from 'react';
import { useSocket } from "../contexts/socket-context";
import { MessageType } from "../../server/Message";
import { GT7Data } from "../../server/Gt7Data";

const ThrottleIndicator: React.FC = () => {
    const [throttle, setThrottle] = useState(0);
    const {subscribe, unsubscribe} = useSocket();

    useEffect(() => {
        subscribe(MessageType.data, (data: GT7Data) => {
            setThrottle((data.throttle / 255 ) * 100);
        })

        return () => {
            // TODO: sunbsubscribe
        }
    }, [throttle]);

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="mb-2 text-muted">Throttle</div>
            <div className="progress" style={{ height: '200px', width: '30px', flexDirection: 'column-reverse' }}>
                <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ height: `${throttle}%`, transition: 'height 0.1s ease-in-out' }}
                    aria-valuenow={throttle}
                    aria-valuemin="0"
                    aria-valuemax="100"
                />
            </div>
            <small className="text-muted mt-1">{throttle.toFixed(0)}%</small>
        </div>
    );
};

export default ThrottleIndicator;