"use client";
import { useState } from "react";
import LoadMap from "./LoadMap";
import { SensorDataType, Coordinates } from "../../../types";
import "../globals.css";

type Props = {
  sensorData: SensorDataType[];
  isOpen: Boolean;
  closeBar: () => void;
};

const SideBar = ({ sensorData, isOpen, closeBar }: Props) => {
  const [clickedSensor, setClickedSensor] = useState<Coordinates | null>(null);
  function handleClick(latitude: number, longitude: number) {
    const clickedData: Coordinates = [latitude, longitude];

    setClickedSensor(clickedData);
  }

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full left-1/2 md:left-3/4 text-white transition-transform transform z-50 overflow-auto ${
          isOpen ? "translate-x-100" : "translate-x-full"
        } `}
      >
        <div>
          <div className="pt-1 md:pt-4 pl-1 pr-1 mt-14 m-auto md:text-md lg:text-base text-xs">
            <button
              onClick={closeBar}
              className="hover:scale-105 bg-gray-400 pl-2 pr-2 mb-1 bg-opacity-70 hover:bg-gray-400
            rounded-md"
            >
              close
            </button>
          </div>
          <div className="absolute flex-col mt-2 w-11/12 mr-6 text-center ml-6">
            <ul>
              {sensorData.map((data, index) => (
                <li
                  key={index}
                  className="mt-1 mb-3 mr-3 p-4 bg-sky-800 bg-opacity-70 hover:scale-105 rounded-md shadow-md transform transition-transform duration-200 ease-in-out hover:bg-sky-800 active:scale-105 text-xs md:text-md lg:text-base"
                >
                  <button
                    onClick={() => handleClick(data.latitude, data.longitude)}
                  >
                    <b>Node ID: </b>
                    {data.nodeID} <br /> <b>Temperature: </b>
                    {data.temp} <br />
                    <b>Humidity:</b> {data.humidity} <br /> <b>Latitude:</b>
                    {data.latitude} <br /> <b>Longitude:</b> {data.longitude}
                    <br />
                    <b>Time:</b> {data.time} <br /> <b>Battery:</b>{" "}
                    {data.battery} <br />
                    <b>Health:</b> {data.health}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <LoadMap sensorData={sensorData} clickedSensor={clickedSensor} />
    </>
  );
};

export default SideBar;
