import React from "react"
import io from "socket.io-client"

export const socket = io("188.121.208.146:8000")
export const SocketContext = React.createContext()
