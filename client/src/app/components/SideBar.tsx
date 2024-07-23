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
    console.log(clickedData);
  }

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full left-3/4 text-white transition-transform transform z-50 overflow-auto shadow-2xl ${
          isOpen ? "translate-x-100" : "translate-x-full"
        } `}
      >
        <div>
          <div>
            <button onClick={closeBar} className="text-xl">
              x
            </button>
          </div>
          <div>
            <ul className="absolute flex-col justify-center items-center content-center ml-5 mr-5">
              {sensorData.map((data, index) => (
                <li key={index}>
                  <button
                    className="mb-3 p-4 bg-blue-400 rounded shadow-md transform transition-transform duration-200 ease-in-out hover:bg-blue-300 hover:scale-100 active:scale-105"
                    onClick={() => handleClick(data.latitude, data.longitude)}
                  >
                    Node ID: {data.nodeID}, Temperature: {data.temp}, Humidity:{" "}
                    {data.humidity}, Latitude: {data.latitude}, Longitude:{" "}
                    {data.longitude}, Time: {data.time}, Battery: {data.battery}
                    , Health: {data.health}
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
