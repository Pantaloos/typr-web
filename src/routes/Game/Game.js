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
  const { gameText, gameId, progress, nickname, roomCode } = state;

  // const gameText =
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  const [gameState, setGameState] = useState([]);
  const [gameProgress, setGameProgress] = useState(progress);

  const gameOverHandle = useCallback(() => {
    const mistakes = gameState.filter((it) => !it).length;
    socket.emit("submitResult", { mistakes });

    navigate(`/result/${gameId}`, {
      state: {
        nickname: nickname,
        roomCode: roomCode,
      },
    });
  }, [gameState, gameId, socket, navigate]);

  useEffect(() => {
    if (socket) {
      socket.on("gameOver", () => {
        gameOverHandle(gameState);
      });

      socket.on("progressUpdate", (data) => {
        setGameProgress(data);
      });
    }
  }, [socket, gameState, gameOverHandle]);

  return (
    <div className="flex-v pt-4">
      <div className="flex">
        <Timer initialSeconds={100} customStyle="timer-padding"></Timer>
        <div className="flex players-container">
          {gameProgress.map((it) => (
            <PlayerProgress
              progressProcentage={it.progress}
              key={it.id}
              containerCustomStyle="player-progress-padding"
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
