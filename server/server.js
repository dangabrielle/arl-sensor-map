const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const dotenv = require("dotenv");
const mqtt = require("mqtt");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  },
});

app.use(cors());
dotenv.config();

const protocol = "mqtt";
const host = "broker.emqx.io";
const port = "1883";
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

const connectUrl = `${protocol}://${host}:${port}`;

const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: "emqx",
  password: "public",
  reconnectPeriod: 1000,
});

const topic = "/node/mqtt";

client.on("connect", () => {
  console.log("Connected to MQTT broker");
  client.subscribe(topic, () => {
    console.log(`Subscribed to topic ${topic}`);
  });
});

client.on("message", async (topic, payload) => {
  console.log("Received Message:", topic, payload.toString());
  const data = JSON.parse(payload.toString());
  console.log(data);

  let result;
  try {
    result = await prisma.data.create({
      data,
    });
    console.log(result);
  } catch (err) {
    console.error("Error creating data", err);
    return;
  }

  io.emit("newSensorData", result);
});

io.on("connection", (socket) => {
  console.log("Websocket client connected");

  socket.on("msg", (data) => {
    console.log("Received JSON data from client:", data);
    const responseData = { message: "Hello from server", dataReceived: data };
    socket.emit("message", responseData);
  });

  socket.on("disconnect", () => {
    console.log("Websocket client disconnected");
  });
});

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`WebSocket server running on port ${PORT}`);
});
