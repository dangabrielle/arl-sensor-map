"use client";

import { io } from "socket.io-client";

export const socket = io("https://sensor-map-cee560989601.herokuapp.com/");
