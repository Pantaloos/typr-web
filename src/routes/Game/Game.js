import Display from "components/Display/Display"
import "./Game.scss"
import React, { useState, useContext, useEffect } from "react"
import { useParams, useLocation, useNavigate } from "react-router-dom"
import { SocketContext } from "../../socket"

function Game() {
  const socket = useContext(SocketContext)
  const { id } = useParams()

  const { state } = useLocation()
  const { gameText } = state

  // const gameText =
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  useEffect(() => {
    if (socket) {
      return () => {
        // socket.emit("leaveRoom", { roomCode: id })
      }
    }
  }, [])

  return <Display text={gameText}></Display>
}
export default Game
