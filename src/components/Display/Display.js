import "./Display.scss";
import Input from "components/Input/Input";
import { useEffect, useState } from "react";
import { getCharSequence } from "helpers/char.helper";
import { socket } from "socket";

const validCharSet = new Set(getCharSequence(" ", "~"));

function Display({
  text = "placeholder  ",
  displayCustomStyle = "",
  displayTextStyle = "",
  inputCustomStyle = "",
  inputTextStyle = "",
  gameOverHandle = () => {},
  onGameStateChange = () => {},
  ...props
}) {
  let fullText = text;

  const [playerInput, setPlayerInput] = useState("");
  const [hashMap, setHashMap] = useState([...fullText].map(() => false));
  const [currentIndex, setCurrentIndex] = useState(0);

  const playerInputHandler = (enteredText) => {
    setPlayerInput(enteredText);
  };

  const progressGame = () => {};

  const onKeyDown = (event) => {
    if (event.key === "Backspace") {
      if (currentIndex !== 0) setCurrentIndex(currentIndex - 1);
      return;
    }

    if (!validCharSet.has(event.key) || currentIndex === fullText.length) {
      return;
    }

    setHashMap((previousHashMap) => {
      previousHashMap[currentIndex] = event.key === fullText[currentIndex];
      return previousHashMap;
    });
    setCurrentIndex(currentIndex + 1);

    onGameStateChange(hashMap);
    progressGame();
  };

  const charClass = (index) => {
    if (index > currentIndex) return "";
    if (index === currentIndex) return "current-char";

    return hashMap[index] ? "correct-char" : "incorrect-char";
  };

  useEffect(() => {
    if (currentIndex === fullText.length) {
      gameOverHandle(hashMap);
    }
    socket.emit("progressGame", {
      progress: Math.round((currentIndex / fullText.length) * 100),
    });
  }, [currentIndex, fullText.length, gameOverHandle, hashMap]);

  const displayStyle = `text-display ${displayTextStyle} ${displayCustomStyle} unselectable`;
  const inputStyle = `${inputTextStyle} ${inputCustomStyle}`;

  return (
    <div className="flex-column">
      <div className={displayStyle}>
        {[...fullText].map((c, ind) => (
          <span key={ind} className={charClass(ind)}>
            {c}
          </span>
        ))}
      </div>
      <Input
        className={inputStyle}
        type="multiple"
        onSaveInputData={playerInputHandler}
        onKeyDown={onKeyDown}
        isSelectable={false}
        maxLength={fullText.length}
      ></Input>
    </div>
  );
}
export default Display;
