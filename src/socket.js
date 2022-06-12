import React from "react";
import io from "socket.io-client";

export const socket = io(`${process.env.REACT_APP_API_URL}`);
export const SocketContext = React.createContext();
