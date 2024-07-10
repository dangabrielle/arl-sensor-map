"use client";

import { useEffect, useState } from "react";
import { socket } from "../../socket";

type Props = {
  initialSensorData: SensorDataType[];
};

type SensorDataType = {
  nodeID: string;
  latitude: number;
  longitude: number;
  time: string;
  temp: number;
  humidity: number;
  battery: number;
  health: string;
  employeeId?: string | null;
};
const SensorData = ({ initialSensorData }: Props) => {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");
  const [sensorData, setSensorData] =
    useState<SensorDataType[]>(initialSensorData);

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);
      console.log("Connected to server");
    };

    const onDisconnect = () => {
      setIsConnected(false);
      setTransport("N/A");
      console.log("Disconnected from server");
    };

    const onNewSensorData = (data: SensorDataType) => {
      console.log("Received new sensor data:", data);
      setSensorData((prevData) => [...prevData, data]);
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("newSensorData", onNewSensorData);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("newSensorData", onNewSensorData);
    };
  }, []);

  return (
    <div>
      <h1>Real-Time Sensor Data</h1>
      <p>Connection status: {isConnected ? "Connected" : "Disconnected"}</p>
      <p>Transport: {transport}</p>
      <ul>
        {sensorData.map((data, index) => (
          <li key={index}>
            Node ID: {data.nodeID}, Temperature: {data.temp}, Humidity:{" "}
            {data.humidity}, Latitude: {data.latitude}, Longitude:{" "}
            {data.longitude}, Time: {data.time}, Battery: {data.battery},
            Health: {data.health}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SensorData;
