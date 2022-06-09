import Button from "components/Button/Button"
import Text from "components/Text/Text"
import { Box } from "routes/Home/Home"
import React, { useState, useContext, useEffect } from "react"
import { useParams, useLocation, useNavigate } from "react-router-dom"
import { SocketContext } from "../../socket"

import "./Room.scss"

const Room = () => {
  const { id } = useParams()
  const { state } = useLocation()
  const { nickname } = state

  const [playersInfo, updatePlayersInfo] = useState([])
  const [gameStarting, updateGameStarting] = useState(false)

  const socket = useContext(SocketContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (socket) {
      socket.emit("joinRoom", {
        roomCode: id,
        createUserDto: { name: nickname },
      })

      socket.on("userCreated", (data) => {
        console.log(data)
      })

      socket.on("roomUpdated", (data) => {
        updatePlayersInfo(data)
      })
      socket.on("gameStarted", (data) => {
        console.log(data)
        updateGameStarting(true)
        //console.log(data)
      })

      // return () => {
      //   if (!gameStarting) {
      //     console.log("deleting room")
      //     socket.emit("leaveRoom", { roomCode: id })
      //   }
      // }
    }
  }, [])

  useEffect(() => {
    if (gameStarting) navigate(`/game/${id}`)
  }, [gameStarting])

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
        <Box title="PLAYERS">
          {playersInfo.map((player) => (
            <div className="text-color" id={player.id}>
              {player.name}
            </div>
          ))}
        </Box>
        <Button
          type="filled"
          textType="large-b"
          customStyle="fw-700 w-100 mt-24"
          onClick={() => {
            socket.emit("readyUp")
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
