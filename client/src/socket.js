"use client";

import { io } from "socket.io-client";

// export const socket = io("https://sensor-map-cee560989601.herokuapp.com/", {
//   transports: ["websocket"],
// });

export const socket = io("http://localhost:3001/", {
  transports: ["websocket"],
});
