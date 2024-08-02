const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const dotenv = require("dotenv");
const mqtt = require("mqtt");
const fetch = require("node-fetch");
const prisma = require("./db/prisma");
const app = express();
const server = http.createServer(app);

app.use(cors());
dotenv.config();

// MQTT Connection using HiveMQ Public Broker
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

// WebsocketIO connection
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  },
});

io.on("connection", (socket) => {
  console.log("Websocket client connected");

  socket.on("disconnect", () => {
    console.log("Websocket client disconnected");
  });
});

// Receive sensor data via MQTT
client.on("message", async (topic, payload) => {
  const data = JSON.parse(payload.toString());

  let existingNode;
  let newNode;
  // check if nodeID exists in db
  try {
    existingNode = await prisma.data.findFirst({
      where: {
        nodeID: data.nodeID,
      },
    });
  } catch (error) {
    console.error("Unable to find node", error);
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
          time: data.time,
          temp: data.temp,
          humidity: data.humidity,
          battery: data.battery,
          health: data.health,
        },
      });
      // Send updated node to client (websocket IO)
      io.emit("newSensorData", updatedNode);
    } catch (error) {
      console.error("Error updating", error);
    }
  } else {
    try {
      newNode = await prisma.data.create({
        data,
      });
    } catch (err) {}
    // Send updated node to client (websocket IO)
    io.emit("newSensorData", newNode);
  }
});

// The following logic is used when querying sensor data from an external server
// Currently inactive
async function getAlphaSensor() {
  try {
    const apiKey = process.env.API_KEY;
    const url = `https://hub.baseem.dev/nodes/all?apikey=${apiKey}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    let recentUpdate;
    // get most recent update
    for (i = data.length - 1; i >= 0; i--) {
      if (data[i].lat && data[i].lon) {
        console.log(data[i]);
        recentUpdate = data[i];
        break;
      }
    }
    let existingNode;
    let newNode;
    // check if nodeID exists in db
    try {
      existingNode = await prisma.data.findFirst({
        where: {
          nodeID: recentUpdate.nodeId,
        },
      });
      console.log("existing node", existingNode);
    } catch (error) {
      console.error("Node not found", error);
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
            latitude: recentUpdate.lat,
            longitude: recentUpdate.lon,
            time: recentUpdate.updatedAt,
          },
        });
        // Send updated node to client (websocket IO)
        io.emit("newSensorData", updatedNode);
      } catch (error) {
        console.error("Unable to update node: ", error);
      }
    } else {
      try {
        newNode = await prisma.data.create({
          data: {
            nodeID: recentUpdate.nodeId,
            latitude: recentUpdate.lat,
            longitude: recentUpdate.lon,
            time: recentUpdate.createdAt,
            temp: 93, // change schema to accept null values
            humidity: 75,
            battery: 90,
            health: "Good", // health key not in server's object
          },
        });
        io.emit("newSensorData", newNode);
        console.log("Succesfully created a new node: ", newNode);
      } catch (err) {
        console.error("Error creating data", err);
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Commented out code below calls the above function every minute (note it is currently inactive)
// const alphaSensorInterval = setInterval(getAlphaSensor, 60000);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
