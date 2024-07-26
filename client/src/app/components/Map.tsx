"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
  Tooltip,
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
    // map.setView(clickedSensor, 10),
    //   {
    //     animate: true,
    //     duration: 0.25,
    //     easeLinearity: 0.25,
    //     noMoveStart: false,
    //   }; // Set view to the clickedSensor location with zoom level 13
    map.flyTo(clickedSensor);
    clickedSensor = null;
    // map.stop();
  }

  return null;
};

const Map = ({ sensorData, clickedSensor }: Props) => {
  return (
    <>
      <div id="map-container">
        <MapContainer center={[38.46, -121.87]} zoom={7.5}>
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
              {/* <Popup>
                Node ID: {data.nodeID} <br />
                Longitude: {data.longitude} <br />
                Latitude: {data.latitude}
              </Popup> */}
              <Tooltip>
                Node ID: {data.nodeID} <br />
                Longitude: {data.longitude} <br />
                Latitude: {data.latitude}
              </Tooltip>
            </CircleMarker>
          ))}
          <MyComponent clickedSensor={clickedSensor} sensorData={sensorData} />
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
