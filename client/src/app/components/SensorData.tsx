"use client";

import { useEffect, useState } from "react";
import { socket } from "../../socket";
import React from "react";
import LoadMap from "./LoadMap";
import { useMap } from "react-leaflet";
import SideBar from "./SideBar";

type Props = {
  initialData: SensorDataType[];
};

type Coordinates = [latitude: number, longitude: number];

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

const SensorData = ({ initialData }: Props) => {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");
  const [sensorData, setSensorData] = useState<SensorDataType[]>(initialData);
  // const [clickedSensor, setClickedSensor] = useState<Coordinates | null>(null);
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);

  function openSideBar() {
    setIsSideBarOpen(true);
  }

  function closeSideBar() {
    setIsSideBarOpen(false);
  }
  useEffect(() => {
    console.log(
      "socket server URL:",
      process.env.NEXT_PUBLIC_WEBSOCKET_SERVER_URL
    );
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

      setSensorData((prevData) => {
        let idx = prevData.findIndex(
          (current) => current.nodeID == data.nodeID
        );
        let newData = [...prevData];
        if (idx !== -1) {
          newData[idx] = data;
          console.log(newData);
          return newData;
        } else {
          return [...prevData, data];
        }
      });
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
      <div className="z-50 flex p-0.5 absolute w-10/12 justify-between bg-transparent pl-3 pr-3 pt-2 pb-2 text-white ml-20">
        <h1 className=" text-white z-50 bg-gray-400 pl-2 pr-2 hover:bg-blue-600  hover:scale-105 rounded">
          Real-Time Sensor Data
        </h1>
        <p className=" text-white z-50 bg-gray-400 pl-2 pr-2 hover:bg-blue-600  hover:scale-105 rounded">
          Connection status: {isConnected ? "Connected" : "Disconnected"}
        </p>
        <p className=" text-white z-50 bg-gray-400 pl-2 pr-2 hover:bg-blue-600  hover:scale-105 rounded">
          Transport: {transport}
        </p>
        <button
          onClick={openSideBar}
          className=" text-white z-50 bg-gray-400 pl-2 pr-2 hover:bg-blue-600  hover:scale-105 rounded active:bg-blue-400 "
        >
          View Sensors
        </button>
      </div>

      <SideBar
        sensorData={sensorData}
        isOpen={isSidebarOpen}
        closeBar={closeSideBar}
      />
    </div>
  );
};

export default SensorData;
