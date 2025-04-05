import React, { useState } from 'react';
import ThemeButton from "../ui/theme-button";
import {useSocket} from "../contexts/socket-context";
import { useNavigate } from "react-router-dom";
import { toast, Id as ToastId } from "react-toastify";
import { MessageType } from "../../server/Message";

const Login = () => {
    const {connect, subscribe, unsubscribe} = useSocket();
    const [url, setUrl] = useState("127.0.0.1");
    const navigate = useNavigate();

    const handleConnect = () => {
        const connecToastId: ToastId = toast.info("Connecting to local server...");

        subscribe(MessageType.error, (message: string) => {
            toast.error(message)
        })

        // Connect to WebSocket with the remote address
        connect(url)
            .then(()=> {
                toast.dismiss(connecToastId);

                toast.info("Connected! Connecting to Playstation...");
            })
            .catch((err) => {
                toast.dismiss(connecToastId);

                toast.error(err);
            });
    };

    return (
        <div className="page page-center __web-inspector-hide-shortcut__">
            <div className="container container-tight py-4">
                <div className="text-center mb-4">
                    <a href="." className="navbar-brand navbar-brand-autodark">
                        <img src='img.png' alt='GT Telemtry viewer' />
                    </a>
                </div>
                <div className="card card-md">
                    <div className="card-body text-center py-4 p-sm-5">

                        <h1 className="mt-5">GT7 Telemetry Viewer</h1>
                        <p className="text-secondary">
                            Tabler comes with tons of well-designed components and features. Start your adventure with
                            Tabler and make your dashboard great again.
                        </p>
                    </div>
                    <div className="hr-text hr-text-center hr-text-spaceless">your data</div>
                    <div className="card-body">
                        <div className="mb-3">
                            <label className="form-label">Playstation IP</label>
                            <div className="input-group input-group-flat">
                                <span className="input-group-text"> IP </span>
                                <input
                                    type="text"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    className="form-control ps-1" autoComplete="off"/>
                            </div>
                            <div className="form-hint">
                                Enter the IP address of your Playstation as currently shown in your private network.
                                This will not work via the internet!
                            </div>
                        </div>
                        <div>
                            <ThemeButton/>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center mt-3">
                    <div className="col">
                        <div className="btn-list justify-content-end">
                            <button onClick={handleConnect} className="btn btn-primary btn-2"> Connect </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
