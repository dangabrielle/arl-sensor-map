"use client";
import prisma from "../../lib/prisma";
import Data from "../app/components/Data";

import { useEffect, useState } from "react";
import { socket } from "../../src/socket";

// async function getData() {
//   const data = await prisma.data.findMany({
//     where: { nodeID: "node 1" },
//   });
//   return data;
// }

export default function Collections() {
  // const data = await getData();
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");
  const [receivedMessage, setReceivedMessage] = useState({});

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    socket.on("connect", () => {
      console.log("connected to server");
      setIsConnected(true);
    });
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  useEffect(() => {
    socket.on("newSensorData", (nodeData) => {
      console.log("Receiced data", nodeData);
      setReceivedMessage(nodeData);
    });
  });

  // const sendMessage = () => {
  //   socket.emit("msg", { sensorData });
  // };
  return (
    <>
      {/* {data.map((entry) => {
        return (
          <Data
            key={entry.nodeID}
            nodeID={entry.nodeID}
            latitude={entry.latitude}
            longitude={entry.longitude}
          />
        );
      })} */}

      <p>Websocket Status: {isConnected ? "connected" : "disconnected"}</p>
      <p>{JSON.stringify(receivedMessage)}</p>
    </>
  );
}
