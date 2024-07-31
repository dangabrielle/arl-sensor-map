"use client";
import { useState } from "react";
import LoadMap from "./LoadMap";
import "../globals.css";

type Props = {
  sensorData: SensorDataType[];
  isOpen: Boolean;
  closeBar: () => void;
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

const SideBar = ({ sensorData, isOpen, closeBar }: Props) => {
  const [clickedSensor, setClickedSensor] = useState<Coordinates | null>(null);
  function handleClick(latitude: number, longitude: number) {
    const clickedData: Coordinates = [latitude, longitude];

    setClickedSensor(clickedData);
  }

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full left-1/2 md:left-3/4  text-white transition-transform transform z-50 overflow-auto ${
          isOpen ? "translate-x-100" : "translate-x-full"
        } `}
      >
        <div>
          <div className="font-bold pt-2 pl-1 pr-2 mt-2">
            <button onClick={closeBar} className="text-xl hover:scale-125">
              x
            </button>
          </div>
          <div>
            <ul className="absolute flex-col justify-center 2xl:w-11/12  text-center ml-6">
              {sensorData.map((data, index) => (
                <li
                  key={index}
                  className="mt-1 ml-5 mb-3 mr-3 p-4 bg-sky-800 bg-opacity-60 hover:scale-105 rounded-md shadow-md transform transition-transform duration-200 ease-in-out hover:bg-sky-800 active:scale-105 text-xs md:text-md lg:text-base"
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
