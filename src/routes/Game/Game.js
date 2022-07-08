import Display from "components/Display/Display";
import "./Game.scss";
import React, { useState, useContext, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SocketContext } from "../../socket";
import Timer from "components/Timer/Timer";
import PlayerProgress from "components/PlayerProgress/PlayerProgress";

function Game() {
  const socket = useContext(SocketContext);
  const navigate = useNavigate();

  const { state } = useLocation();
  const { gameText, gameId, progress, nickname, roomCode, time } = state;

  // const gameText =
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  const [seconds, setSeconds] = useState(time);
  const [minutes, setMinutes] = useState(0);
  const [gameState, setGameState] = useState([]);
  const [gameProgress, setGameProgress] = useState(progress);

  const gameOverHandle = useCallback(() => {
    const mistakes = gameState.filter((it) => !it).length;
    if (gameState.length !== 0)
      socket.emit("submitResult", { mistakes, textLength: gameText.length });

    navigate(`/result/${gameId}`, {
      state: {
        nickname: nickname,
        roomCode: roomCode,
      },
    });
  }, [gameState, gameId, nickname, roomCode, socket, gameText, navigate]);

  useEffect(() => {
    if (socket) {
      socket.on("gameOver", () => {
        gameOverHandle(gameState);
      });

      socket.on("progressUpdate", (data) => {
        setGameProgress(data);
      });

      socket.on("timerUpdated", (data) => {
        setSeconds(data.timeLeft % 60);
        setMinutes(Math.floor(data.timeLeft / 60));
      });
    }
  }, [socket, gameState, gameOverHandle]);

  return (
    <div className="flex-v pt-4">
      <div className="flex">
        <Timer
          initialMinute={minutes}
          initialSeconds={seconds}
          customStyle="timer-padding"
        ></Timer>
        <div className="flex players-container">
          {gameProgress.map((it) => (
            <PlayerProgress
              progressProcentage={it.progress}
              key={it.id}
              containerCustomStyle="player-progress-padding"
              outline={socket.id === it.socketId}
            ></PlayerProgress>
          ))}
        </div>
      </div>
      <Display
        text={gameText}
        gameOverHandle={gameOverHandle}
        onGameStateChange={(gs) => {
          setGameState(gs);
        }}
      ></Display>
    </div>
  );
}
export default Game;
