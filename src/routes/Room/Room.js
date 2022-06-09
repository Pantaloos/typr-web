import Button from "components/Button/Button"
import Input from "components/Input/Input"
import Text from "components/Text/Text"
import { Box } from "routes/Home/Home"
import { io } from "socket.io-client"
import React, { useState, useContext, useCallback, useEffect } from "react"
import { SocketContext } from "../../socket"

import "./Room.scss"

const Room = () => {
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    if (socket === null) {
      setSocket(io("188.121.208.146:8000"))
    }
    // socket.on("connect", () => {
    //   socket.on("userCreated", (data) => {
    //     console.log("userCreatedData", data)
    //   })

    //   socket.on("roomUpdated", (data) => {
    //     console.log("roomUpdatedData", data)
    //   })
    // })

    if (socket) {
      socket.on("connect", () => {
        socket.emit("joined", { serverchannel: 120 })
        console.log("Connected")
      })

      socket.on("userCreated", (data) => {
        console.log(data)
      })
    }
  }, [socket])

  return (
    <div
      className="flex"
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        bottom: "60px",
      }}
    >
      <div className="w-100 h-100" style={{ width: "380px", height: "600px" }}>
        <Box title="PLAYERS"></Box>
        <Button
          type="filled"
          textType="large-b"
          customStyle="fw-700 w-100 mt-24"
          onClick={() => {
            console.log("emmiting message")
            socket.emit("joinRoom", {
              roomCode: "XLMLP",
              createUserDto: { name: "OOGABOOA" },
            })
          }}
        >
          START/READY
        </Button>
      </div>
      <div
        className="ml-5 w-100 h-100"
        style={{ width: "870px", height: "600px" }}
      >
        <Box title="MODES">
          <Text type="medium-b" customStyle="fc-light">
            CURRENTLY UNAVAILABLE, SET TO DEFAULT
          </Text>
        </Box>
      </div>
    </div>
  )
}

export default Room
