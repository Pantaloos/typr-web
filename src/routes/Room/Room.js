import Button from "components/Button/Button";
import Text from "components/Text/Text";
import Box from "components/Box/Box";
import React, { useState, useContext, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { SocketContext } from "../../socket";
import Player from "components/Player/Player";
import Rule from "components/Rule/Rule";

import "./Room.scss";

const Room = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { nickname } = state;

  const [playersInfo, updatePlayersInfo] = useState([]);

  const [ruleTypes, setRuleTypes] = useState([]);
  const [rules, updateRules] = useState({});

  const socket = useContext(SocketContext);
  const navigate = useNavigate();

  const onRuleValueChange = (key, value, text) => {
    updateRules((prev) => {
      if (prev[key] === value) return prev;

      prev[key] = value;
      socket.emit("updateRules", prev);

      return prev;
    });
  };

  useEffect(() => {
    if (socket) {
      socket.emit("joinRoom", {
        roomCode: id,
        updateUserDto: { name: nickname },
      });

      socket.on("userCreated", (data) => {
        // Some stuff
      });

      socket.on("ruleTypes", (data) => {
        setRuleTypes(data);
      });

      socket.on("rulesUpdated", (data) => {
        updateRules(data);
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
            nickname: nickname,
            roomCode: id,
          },
        });
      });
    }
  }, [socket, id, nickname, navigate]);

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
              <Player
                playerName={player.name}
                outline={socket.id === player.socketId}
              ></Player>
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
        <Box title="RULES">
          {Object.entries(rules).map(([key, value]) => {
            return (
              <Rule
                key={`${key}-${value}`}
                value={value}
                data={ruleTypes.find((it) => it.key === key)}
                onValueChange={onRuleValueChange}
              ></Rule>
            );
          })}
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
