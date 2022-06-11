import Display from "components/Display/Display";
import "./Game.scss";
import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SocketContext } from "../../socket";
import Timer from "components/Timer/Timer";

function Game() {
  const socket = useContext(SocketContext);
  const navigate = useNavigate();

  const { state } = useLocation();
  const { gameText, gameId } = state;

  // const gameText =
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  const [gameState, setGameState] = useState([]);

  useEffect(() => {
    if (socket) {
      socket.on("gameOver", () => {
        gameOverHandle();
      });
    }
  }, []);

  const gameOverHandle = () => {
    console.log(gameState);
    const mistakes = gameState.filter((it) => !it).length;
    console.log("Me here");
    socket.emit("submitResult", { mistakes });

    navigate(`/result/${gameId}`);
  };

  return (
    <div className="flex-v">
      <Timer initialSeconds={10}></Timer>
      <Display
        text={gameText}
        gameOverHandle={gameOverHandle}
        onGameStateChange={(gs) => {
          console.log(gs);
          setGameState(gs);
        }}
      ></Display>
    </div>
  );
}
export default Game;
