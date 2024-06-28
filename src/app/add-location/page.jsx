"use client";

import { useState } from "react";
import sensorData from "../sensor-data.json";

export default function addLocation() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      fetch("/api/add-location", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sensorData),
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Add location</h1>
      <button onClick={handleSubmit}>map data</button>
    </>
  );
}
