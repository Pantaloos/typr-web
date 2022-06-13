import Button from "components/Button/Button";
import Text from "components/Text/Text";
import Box from "components/Box/Box";
import React, { useState, useContext, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { SocketContext } from "../../socket";
import Player from "components/Player/Player";

import "./Room.scss";

const Room = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { nickname } = state;

  const [playersInfo, updatePlayersInfo] = useState([]);

  const socket = useContext(SocketContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (socket) {
      socket.emit("joinRoom", {
        roomCode: id,
        updateUserDto: { name: nickname },
      });

      socket.on("userCreated", (data) => {
        // Some stuff
      });

      socket.on("roomUpdated", (data) => {
        updatePlayersInfo(data);
      });
      socket.on("gameStarted", (data) => {
        navigate(`/game/${id}`, {
          state: {
            gameText: data.text,
            gameId: data.gameId,
            progress: data.progress,
          },
        });
      });
    }
  }, []);

  return (
    <div
      className="flex"
      style={{
        height: "100vh",
        position: "relative",
        bottom: "60px",
      }}
    >
      <div className="w-100 h-100" style={{ width: "380px", height: "600px" }}>
        <Box title="PLAYERS">
          {playersInfo.map((player) => (
            <div className="flex-h flex-space-between" key={player.id}>
              <Player playerName={player.name}></Player>
              {player.ready && (
                <span className="ready-text-style flex-center-v">READY</span>
              )}
            </div>
          ))}
        </Box>
        <Button
          type="filled"
          textType="large-b"
          customStyle="fw-700 w-100 mt-24"
          onClick={() => {
            // socket.emit("leaveRoom", { roomCode: id });
            socket.emit("leaveRoom");
            navigate(`/`);
          }}
        >
          LEAVE
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
        <Button
          type="filled"
          textType="large-b"
          customStyle="fw-700 w-100 mt-24"
          onClick={() => {
            socket.emit("toggleReady");
          }}
        >
          START/READY
        </Button>
      </div>
    </div>
  );
};

export default Room;
