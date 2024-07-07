"use client";

import { useState } from "react";
import sensorData from "../../../sensor-data.json";
// import { useRouter } from "next/navigation";
import Collections from "../components/Collections";

export default function addLocation() {
  //   const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/add-location", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sensorData),
      });
      //   router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Add location</h1>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        find
      </button>
      {/* <Collections /> */}
    </>
  );
}
