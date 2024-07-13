const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const dotenv = require("dotenv");
const mqtt = require("mqtt");

const prisma = require("./db/prisma");

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

const topic = "/arl/mqtt";

client.on("connect", () => {
  console.log("Connected to MQTT broker");
  client.subscribe(topic, () => {
    console.log(`Subscribed to topic ${topic}`);
  });
});

io.on("connection", (socket) => {
  console.log("Websocket client connected");

  socket.on("disconnect", () => {
    console.log("Websocket client disconnected");
  });
});

client.on("message", async (topic, payload) => {
  console.log("Received Message:", topic, payload.toString());
  const data = JSON.parse(payload.toString());
  console.log(data.nodeID);

  let existingNode;
  let newNode;
  // check if nodeID exists in db
  try {
    existingNode = await prisma.data.findFirst({
      where: {
        nodeID: data.nodeID,
      },
    });
    console.log("existing node", existingNode);
  } catch (error) {
    console.log("Node not found", error);
  }
  // if node exists, update its new contents
  // if node doesn't exist, add it to db
  if (existingNode) {
    try {
      const updatedNode = await prisma.data.update({
        where: {
          id: existingNode.id,
        },
        data: {
          latitude: data.latitude,
          longitude: data.longitude,
        },
      });
      console.log("Successfully updated node: ", updatedNode);
      io.emit("newSensorData", updatedNode);
      console.log("data emitted to websocket client");
    } catch (error) {
      console.log("Unable to update node: ", error);
    }
  } else {
    try {
      newNode = await prisma.data.create({
        data,
      });
      console.log("Succesfully created a new node: ", newNode);
    } catch (err) {
      console.error("Error creating data", err);
      console.log("data emitted to websocket client");
    }
    io.emit("newSensorData", newNode);
  }
});

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`WebSocket server running on port ${PORT}`);
});
