import React from "react";
import io from "socket.io-client";

export const socket = io("7f59-188-121-208-146.ngrok.io");
export const SocketContext = React.createContext();
