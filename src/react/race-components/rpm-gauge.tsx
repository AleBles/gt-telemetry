import React, { useEffect, useState } from "react";
import { Gauge } from "tabler-icons-react";
import { motion } from "framer-motion";
import { MessageType } from "../../server/Message";
import { GT7Data } from "../../server/Gt7Data";
import { useSocket } from "../contexts/socket-context";

interface RPMGaugeProps {
    rpm: number; // Current RPM value
    maxRPM?: number; // Maximum RPM value (default 8000)
}
export default function RPMGauge({ rpm, maxRPM = 8000 }: RPMGaugeProps) {
    const [animatedRPM, setAnimatedRPM] = useState(0);
    const [rpmPercentage, setRpmPercentage] = useState(0);
    const {subscribe, unsubscribe} = useSocket();

    useEffect(() => {
        subscribe(MessageType.data, (data: GT7Data) => {
            setAnimatedRPM(data.engineRPM);
            setRpmPercentage((animatedRPM / maxRPM) * 100);
        })

        return () => {
            // TODO: sunbsubscribe
        }
    }, [rpm]);


    return (
        <div className="flex flex-col items-center p-4 bg-gray-900 text-white rounded-2xl shadow-lg w-64">
            <div className="flex items-center gap-2">
                <Gauge size={32} className="text-red-500" />
                <span className="text-lg font-semibold">RPM</span>
            </div>
            <motion.div
                className="relative w-full h-4 mt-2 bg-gray-700 rounded-full overflow-hidden"
                initial={{ width: "0%" }}
                animate={{ width: `${rpmPercentage}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="h-full bg-red-500"></div>
            </motion.div>
            <p className="mt-2 text-xl font-bold">{animatedRPM} RPM</p>
        </div>
    );
}
