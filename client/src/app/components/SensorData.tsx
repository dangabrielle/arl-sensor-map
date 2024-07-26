"use client";

import { useEffect, useState } from "react";
import { socket } from "../../socket";
import React from "react";
import Image from "next/image";
import { useRef } from "react";
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
  const [sensorData, setSensorData] = useState<SensorDataType[]>(initialData);
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);
  const { user, error, isLoading } = useUser();
  // used to store interval ID so it can be cleared when socket connection is closed
  // useRef hook only renders once and ensures only one interval is running at a time
  let timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
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

  function startTimer() {
    const start = Date.now();
    timerRef.current = setInterval(() => {
      const elapsedTime = Date.now() - start; // result in miliseconds

      const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

      // 86,400,000 ms = 1d
      // convert remainder ms to hrs
      const hours = Math.floor(
        (elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      // 3,600,000 ms = 1hr
      // convert remainder ms to min
      const minutes = Math.floor(
        (elapsedTime % (1000 * 60 * 60)) / (1000 * 60)
      );

      // 60,000 ms = 1 min
      // calculate remainder ms left after accounts for minutes
      // convert ms to s (1000 ms = 1 s)
      const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
      console.log(seconds);

      setTimeElapsed({ days, hours, minutes, seconds });
    }, 1000);
  }

  function stopTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }
  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true);

      startTimer();
      console.log("Connected to server");
    };

    const onDisconnect = () => {
      setIsConnected(false);

      stopTimer();
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
            <b>APPLIED RESEARCH LABORATORY</b> <br /> University of Hawai&apos;i
          </h1>
        </div>
        <p className="relative text-white z-50  bg-sky-700 p-2 pr-3 pl-3 hover:bg-blue-600 bg-opacity-70 hover:scale-105 rounded ml-auto ">
          <b>Connection status:</b>
          {isConnected
            ? ` Active: ${timeElapsed.days} days ${timeElapsed.hours} hrs ${timeElapsed.minutes} min
          ${timeElapsed.seconds} s`
            : " Disconnected"}
        </p>

        <button
          onClick={openSideBar}
          className="relative text-white z-50  bg-sky-700 p-2 pr-3 pl-3  hover:bg-blue-600 bg-opacity-70 hover:scale-105 rounded active:bg-blue-400 ml-auto"
        >
          View Sensors ({sensorData.length})
        </button>
        <div className="ml-auto">
          {user ? (
            <div className="flex items-center ml-auto mr-10">
              <div className="relative text-white z-50 bg-gray-400 pl-2 pr-2 hover:bg-blue-600  hover:scale-105 mr-3 rounded">
                <a href="/api/auth/logout">Logout</a>
              </div>
              <Image
                src={userImage}
                className="rounded-full w-4/12 mr-10 "
                height={100}
                width={100}
                alt=""
              />
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
