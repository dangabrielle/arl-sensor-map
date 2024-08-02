"use client";

import { useEffect, useState } from "react";
import { socket } from "../../socket";
import React from "react";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import SideBar from "./SideBar";
import { useUser } from "@auth0/nextjs-auth0/client";
import { motion } from "framer-motion";
import { SensorDataType } from "../../../types";

type Props = {
  initialData: SensorDataType[];
};

const SensorData = ({ initialData }: Props) => {
  const [isConnected, setIsConnected] = useState(false);
  const [sensorData, setSensorData] = useState<SensorDataType[]>(initialData);
  const [timeElapsed, setTimeElapsed] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);
  const { user, error, isLoading } = useUser();
  // used to store interval ID so it can be cleared when socket connection is closed
  // useRef hook only renders once and ensures only one interval is running at a time
  let timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

      setTimeElapsed({ hours, minutes, seconds });
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
    };

    const onDisconnect = () => {
      setIsConnected(false);

      stopTimer();
    };

    const onNewSensorData = (data: SensorDataType) => {
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
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: [0.25, 0.1, 0.05, 1.1], duration: 1 }}
        className="z-50 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-2 absolute md:w-11/12 ml-10 mr-10 md:justify-evenly md:items-start bg-transparent pt-5 text-white"
      >
        <div className="flex flex-col md:flex-row items-center">
          <Link
            href="https://arl.hawaii.edu/"
            target="_blank"
            className="flex items-start hover:scale-105 "
          >
            <Image
              src="https://www.soest.hawaii.edu/cimar/wp-content/uploads/2019/07/university-of-hawaii-manoa-300x300.png"
              alt="UH Logo"
              width={100}
              height={100}
              layout="responsive"
              className="rounded-full md:max-w-28 max-w-16 mr-auto ml-5 shadow-gray-700 shadow-md"
            />
          </Link>
          <div>
            <Link
              href="https://arl.hawaii.edu/"
              target="_blank"
              className="flex items-start hover:scale-105 "
            >
              <h1 className="relative text-white z-50 bg-green-800 p-2 pr-3 pl-3 bg-opacity-70 hover:bg-emerald-700 rounded-md shadow-gray-700 shadow-md mt-2 md:mt-0 md:mr-auto ml-5 text-center text-xs md:text-sm lg:text-base hover:scale-105">
                <b>APPLIED RESEARCH LABORATORY</b> <br /> University of
                Hawai&apos;i
              </h1>
            </Link>
            <div className="relative text-white bg-green-800 p-2 mt-2 bg-opacity-70 hover:bg-emerald-700 rounded-md text-center ml-5 text-xs md:text-sm lg:text-base hover:scale-105">
              <Link href="/about" className="hover:scale-105 hover:font-bold">
                PROJECT SUMMARY
              </Link>
            </div>
          </div>
        </div>

        <p className="relative text-white z-50  bg-sky-700 p-2 pr-3 pl-3 hover:bg-sky-700 bg-opacity-70 hover:scale-105 rounded-md  md:ml-auto text-center text-xs md:text-sm lg:text-base">
          <b>Connection status:</b>
          {isConnected
            ? ` active -
              ${timeElapsed.hours} hrs ${timeElapsed.minutes} min
          ${timeElapsed.seconds} s`
            : " Disconnected"}
        </p>

        <button
          onClick={openSideBar}
          className="relative text-white z-50  bg-sky-700 p-2 pr-3 pl-3  hover:bg-sky-700 bg-opacity-70 hover:scale-105 rounded-md active:bg-blue-400 md:ml-auto text-xs md:text-sm lg:text-base"
        >
          View Sensors ({sensorData.length})
        </button>

        {/* If user exists, display profile picture */}
        {/* Add logic to redirect to login if user doesn't exist */}

        <div className="m-auto items-start md:ml-auto">
          {user && (
            <div className="flex items-center ml-auto mr-10">
              <div className="relative text-white z-50 bg-gray-400 p-1 pr-3 pl-3 bg-opacity-70 hover:bg-gray-400 hover:scale-105 mr-3 rounded-md text-xs md:text-sm lg:text-base -mt-2.5">
                <a href="/api/auth/logout">Logout</a>
              </div>
              <Image
                src={userImage}
                className="rounded-full w-full max-w-16 min-w-10"
                height={35}
                width={35}
                alt=""
              />
            </div>
          )}
        </div>
      </motion.div>

      <SideBar
        sensorData={sensorData}
        isOpen={isSidebarOpen}
        closeBar={closeSideBar}
      />
    </>
  );
};

export default SensorData;
