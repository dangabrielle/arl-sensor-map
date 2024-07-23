"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
} from "react-leaflet";
import { useMap } from "react-leaflet/hooks";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

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

const MyComponent = ({ clickedSensor, sensorData }: Props) => {
  const map = useMap();

  // Update map view when clickedSensor changes
  if (clickedSensor) {
    console.log("after change", clickedSensor);
    map.setView(clickedSensor, 13); // Set view to the clickedSensor location with zoom level 13
  }

  return null; // or return any other JSX if needed
};

const Map = ({ sensorData, clickedSensor }: Props) => {
  console.log("clicked", clickedSensor);

  return (
    <>
      <MapContainer
        center={[38.46, -121.87]}
        zoom={7.5}
        className="h-full w-full"
      >
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
          >
            <Popup>
              Node ID: {data.nodeID} <br />
              Longitude: {data.longitude} <br />
              Latitude: {data.latitude}
            </Popup>
          </CircleMarker>
        ))}
        <MyComponent clickedSensor={clickedSensor} sensorData={sensorData} />
      </MapContainer>
    </>
  );
};

export default Map;
