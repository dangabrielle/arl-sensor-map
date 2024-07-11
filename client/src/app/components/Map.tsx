"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from "leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

interface MapProps {
  posix: LatLngExpression[] | LatLngTuple[];
  zoom?: number;
}

const defaults = {
  zoom: 19,
};

type Props = {
  sensorData: SensorDataType[];
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

const Map = ({ sensorData }: Props) => {
  //   const { zoom = defaults.zoom, posix } = Map;
  //   console.log(posix);
  console.log("map: ", sensorData);
  return (
    <MapContainer
      center={[37.7749, -122.4194]}
      zoom={19}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {sensorData.map((data, index) => (
        <Marker
          key={index}
          position={[data.latitude, data.longitude]}
          draggable={false}
        >
          <Popup>{data.nodeID}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
