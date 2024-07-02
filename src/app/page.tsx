"use client";

import { useEffect, useState } from "react";
import { socket } from "../socket";
import sensorData from "../app/sensor-data.json";

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");
  const [receivedMessage, setReceivedMessage] = useState({});

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  useEffect(() => {
    socket.on("message", (data) => {
      console.log("Receiced data", data);
      setReceivedMessage(data);
    });
  });

  const sendMessage = () => {
    socket.emit("message", { sensorData });
  };

  return (
    <div>
      <p>Status: {isConnected ? "connected" : "disconnected"}</p>
      <p>Transport: {transport}</p>
      <button
        onClick={sendMessage}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Send
      </button>
      <pre>{JSON.stringify(receivedMessage, null, 2)}</pre>
    </div>
  );
}
