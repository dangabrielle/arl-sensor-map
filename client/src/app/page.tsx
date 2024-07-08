"use client";
import prisma from "../../lib/prisma";
import Data from "../app/components/Data";

import { useEffect, useState } from "react";
import { socket } from "../../src/socket";
type SensorData = {
  nodeID: string;
  latitude: number;
  longitude: number;
  time: string;
  temp: number;
  humidity: number;
  battery: number;
  health: string;
};

// async function getData() {
//   const data = await prisma.data.findMany({
//     where: { nodeID: "node 1" },
//   });
//   return data;
// }

const HomePage = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");
  const [sensorData, setSensorData] = useState<SensorData[]>([]);

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

    const onNewSensorData = (data: SensorData) => {
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

export default HomePage;
