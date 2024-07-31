"use client";

import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import "../globals.css";
import L from "leaflet";
import { useEffect } from "react";

type Props = {
  sensorData: SensorDataType[];
  clickedSensor: Coordinates | null;
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

const SingleView = ({ clickedSensor, sensorData }: Props) => {
  const map = useMap();

  useEffect(() => {
    if (clickedSensor) {
      map.flyTo(clickedSensor, 6);
    }
  }, [clickedSensor]);

  return null;
};

const Map = ({ sensorData, clickedSensor }: Props) => {
  return (
    <>
      <div id="map-container">
        <MapContainer center={[38.46, -121.87]} zoom={5} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {sensorData.map((data, index) => (
            <CircleMarker
              key={index}
              center={[data.latitude, data.longitude]}
              radius={10}
              color="#d12e4f"
              fillColor="#d12e4f"
              fillOpacity={0.5}
              className="pulsatingIcon"
            >
              <Tooltip>
                Node ID: {data.nodeID} <br />
                Longitude: {data.longitude} <br />
                Latitude: {data.latitude}
              </Tooltip>
            </CircleMarker>
          ))}
          <SingleView clickedSensor={clickedSensor} sensorData={sensorData} />
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
