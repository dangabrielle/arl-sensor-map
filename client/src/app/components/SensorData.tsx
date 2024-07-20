"use client";

import { useEffect, useState } from "react";
import { socket } from "../../socket";
import React from "react";
import LoadMap from "./LoadMap";
import FindLocation from "./FindLocation";
import { useMap } from "react-leaflet";

type Props = {
  initialData: SensorDataType[];
  // clickedSensor: Coordinates | null
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

type Coordinates = [latitude: number, longitude: number];

const SensorData = ({ initialData }: Props) => {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");
  const [sensorData, setSensorData] = useState<SensorDataType[]>(initialData);
  const [clickedSensor, setClickedSensor] = useState<Coordinates | null>(null);

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
      // add updates to coordinates logic for existing nodes here
      // let alreadyExists = false;
      // for (let i = 0; i < sensorData.length; i++) {
      //   if (sensorData[i].nodeID === data.nodeID) {
      //     sensorData[i] = data;
      //     alreadyExists = true;
      //   }
      // }

      // console.log("sensor data update", sensorData);
      // console.log(alreadyExists);

      // if (alreadyExists) {
      //   setSensorData(sensorData);
      // } else {
      //   setSensorData((prevData) => [...prevData, data]);
      // }

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

  function handleClick(latitude: number, longitude: number) {
    const clickedData: Coordinates = [latitude, longitude];

    setClickedSensor(clickedData);
    console.log(clickedData);

    // const map = useMap();
    // map.setView([data.latitude, data.longitude], 13);
    // return <FindLocation lat={data.latitude} lng={data.longitude} />;
  }

  return (
    <div>
      <h1>Real-Time Sensor Data</h1>
      <p>Connection status: {isConnected ? "Connected" : "Disconnected"}</p>
      <p>Transport: {transport}</p>
      <ul className="flex justify-center items-center">
        {sensorData.map((data, index) => (
          <li key={index}>
            <button
              className="m-2 p-4 bg-blue-400 rounded shadow-md transform transition-transform duration-200 ease-in-out hover:bg-blue-300 hover:scale-100 active:scale-105"
              onClick={() => handleClick(data.latitude, data.longitude)}
            >
              Node ID: {data.nodeID}, Temperature: {data.temp}, Humidity:{" "}
              {data.humidity}, Latitude: {data.latitude}, Longitude:{" "}
              {data.longitude}, Time: {data.time}, Battery: {data.battery},
              Health: {data.health}
            </button>
          </li>
        ))}
      </ul>

      <LoadMap sensorData={sensorData} clickedSensor={clickedSensor} />
    </div>
  );
};

export default SensorData;
