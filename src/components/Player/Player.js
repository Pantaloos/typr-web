import "./Player.scss"

const Player = ({
  playerIcon = "placeholder_player_image.png",
  playerName = " placeholder name",
  imageCustomStyle = "",
  containerCustomStyle = "",
  textCustomStyle = "",
}) => {
  const imageClass = `${imageCustomStyle} img`
  const textClass = `${textCustomStyle} player-name`
  const containerClass = `${containerCustomStyle} player-container`

  const images = require.context("../../assets/icons/", true)
  const image = images(`./${playerIcon}`)

  return (
    <div className={containerClass}>
      <img src={image} alt="Avatar" className={imageClass}></img>
      <span className={textClass}>{playerName}</span>
    </div>
  )
}

export default Player
