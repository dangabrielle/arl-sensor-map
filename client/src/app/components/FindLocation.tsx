import React from "react";
import { useMap } from "react-leaflet";

type SensorDataType = {
  lat: number;
  lng: number;
};

const FindLocation = ({ lat, lng }: SensorDataType) => {
  console.log(lat);
  const map = useMap();
  function handleClick() {
    map.setView([lat, lng], 13);
  }

  handleClick();
  return <></>;
};

export default FindLocation;
