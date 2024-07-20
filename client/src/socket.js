"use client";

import { io } from "socket.io-client";

// export const socket = io("https://sensor-map-cee560989601.herokuapp.com/", {
//   transports: ["websocket"],
// });

console.log(
  "connecting to socket.io server at:",
  process.env.NEXT_PUBLIC_WEBSOCKET_SERVER_URL
);

export const socket = io(process.env.NEXT_PUBLIC_WEBSOCKET_SERVER_URL, {
  transports: ["websocket"],
});
