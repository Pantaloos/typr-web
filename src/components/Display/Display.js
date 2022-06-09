import "./Display.scss"
import Input from "components/Input/Input"
import { useEffect, useState } from "react"

function Display({
  text = "placeholder  ",
  displayCustomStyle = "",
  displayTextStyle = "",
  inputCustomStyle = "",
  inputTextStyle = "",
  gameOverHandle = () => {},
  ...props
}) {
  let fullText = text

  const [playerInput, updatePlayerInput] = useState("")

  const [mistake, updateMistake] = useState(false)
  const [correctChars, updateCorrectChars] = useState("")
  const [currentChar, updateCurrentChar] = useState("")

  const [leftChars, updateLeftChars] = useState(fullText)

  const playerInputHandler = (enteredText) => {
    updatePlayerInput(enteredText)
  }
  useEffect(() => {
    for (let i = playerInput.length; i > 0; i--) {
      const compareString = fullText.slice(0, i)
      if (compareString === playerInput) {
        updateCorrectChars(playerInput)
        updateLeftChars(fullText.slice(i, fullText.length))
        break
      }
    }
  }, [playerInput])

  useEffect(() => {
    updateCurrentChar(leftChars.slice(0, 1))
  }, [leftChars])

  useEffect(() => {
    if (playerInput === fullText) {
      gameOverHandle()
    }
  }, [correctChars, playerInput])

  const displayStyle = `text-display ${displayTextStyle} ${displayCustomStyle}`
  const inputStyle = `${inputTextStyle} ${inputCustomStyle}`

  return (
    <div className="flex-column">
      <div className={displayStyle}>
        <span className="correct-chars">{correctChars}</span>
        <span className="current-char">{currentChar}</span>
        {leftChars.slice(1, leftChars.length)}
      </div>
      <Input
        className={inputStyle}
        type="multiple"
        onSaveInputData={playerInputHandler}
      ></Input>
    </div>
  )
}
export default Display
