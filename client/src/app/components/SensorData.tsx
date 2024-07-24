"use client";

import { useEffect, useState } from "react";
import { socket } from "../../socket";
import React from "react";
import Image from "next/image";
import LoadMap from "./LoadMap";
import { useMap } from "react-leaflet";
import SideBar from "./SideBar";
import { useUser } from "@auth0/nextjs-auth0/client";

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
  const { user, error, isLoading } = useUser();
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;
  const userImage =
    user?.picture ||
    "https://www.businessnetworks.com/sites/default/files/default_images/default-avatar.png";
  function openSideBar() {
    setIsSideBarOpen(true);
  }

  function closeSideBar() {
    setIsSideBarOpen(false);
  }
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
    <>
      <div
        className="z-50 flex absolute w-full ml-10 justify-evenly bg-transparent pt-3 text-white content-center items-center "
        // style={{
        //   fontSize: "initial",
        //   color: "initial",
        //   fontFamily: "initial",
        //   fontWeight: "initial",
        // }}
      >
        <div className="flex items-center">
          <Image
            src="https://www.soest.hawaii.edu/cimar/wp-content/uploads/2019/07/university-of-hawaii-manoa-300x300.png"
            alt="UH Logo"
            width={100}
            height={100}
            layout="responsive"
            className="rounded-full max-w-24 min-w-10 mr-auto ml-5 "
          />
          <h1 className="relative text-white z-50 bg-green-800 p-2 pr-3 pl-3 bg-opacity-70 hover:bg-blue-600  hover:scale-105 rounded shadow-gray-700 shadow-md mr-auto ml-2 text-center">
            <b>APPLIED RESEARCH LABORATORY</b> <br /> University of Hawai'i
          </h1>
        </div>
        <p className="relative text-white z-50  bg-sky-700 p-2 pr-3 pl-3 hover:bg-blue-600 bg-opacity-70 hover:scale-105 rounded ml-auto ">
          Connection status: {isConnected ? "Connected" : "Disconnected"}
        </p>
        <p className="relative text-white z-50  bg-sky-700 p-2 pr-3 pl-3 hover:bg-blue-600 bg-opacity-70 hover:scale-105 rounded ml-auto ">
          Transport: {transport}
        </p>
        <button
          onClick={openSideBar}
          className="relative text-white z-50  bg-sky-700 p-2 pr-3 pl-3  hover:bg-blue-600 bg-opacity-70 hover:scale-105 rounded active:bg-blue-400 ml-auto"
        >
          View Sensors
        </button>
        <div className="ml-auto">
          {user ? (
            <div className="flex items-center ml-auto mr-10">
              <div className="relative text-white z-50 bg-gray-400 pl-2 pr-2 hover:bg-blue-600  hover:scale-105 mr-3 rounded">
                <a href="/api/auth/logout">Logout</a>
              </div>
              <img src={userImage} alt="" className="rounded-full w-4/12 " />
            </div>
          ) : (
            <div className="flex items-center ml-auto mr-20">
              <a
                href="/api/auth/login"
                className="relative text-white z-50 bg-gray-400  hover:bg-blue-600 bg-opacity-70 hover:scale-105 rounded p-2"
              >
                Login / Sign Up
              </a>
            </div>
          )}
        </div>
      </div>

      <SideBar
        sensorData={sensorData}
        isOpen={isSidebarOpen}
        closeBar={closeSideBar}
      />
    </>
  );
};

export default SensorData;
