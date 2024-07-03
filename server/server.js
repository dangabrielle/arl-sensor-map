const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const dotenv = require("dotenv");
// const prisma = require("../lib/prisma");

dotenv.config();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
// const prisma = require("../lib/prisma");

// import { userAgent } from "next/server";
const sensorData = require("../sensor-data.json");
const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  },
});

app.use(cors());

async function main() {
  try {
    const result = await prisma.data.create({
      data: {
        nodeID: sensorData.nodeID,
        latitude: sensorData.latitude,
        longitude: sensorData.longitude,
        time: sensorData.time,
        temp: sensorData.temp,
        humidity: sensorData.humidity,
        battery: sensorData.battery,
        health: sensorData.health,
      },
    });
    // res.status(201).json(result);
    console.log(result);
  } catch (err) {
    console.log("error creating user", err);
  }
}

main();

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("msg", (data) => {
    console.log("Received JSON data from client:", data);
    const responseData = { message: "Hello from server", dataReceived: data };
    socket.emit("message", responseData);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`WebSocket server running on port ${PORT}`);
});
