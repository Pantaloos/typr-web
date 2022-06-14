import "./PlayerProgress.scss";

const PlayerProgress = ({
  containerCustomStyle = "",
  imageCustomStyle = "",
  textCustomStyle = "",
  progressProcentage = 0,
  playerIcon = "placeholder_player_image.png",
  outline = false,
}) => {
  const images = require.context("../../assets/icons/", true);
  const image = images(`./${playerIcon}`);

  const imageClass = `${imageCustomStyle} progress-image-style ${
    outline ? "img-outline" : ""
  }`;
  const textClass = `${textCustomStyle} percentage-style`;
  const containerClass = `${containerCustomStyle} progress-container`;

  return (
    <div className={containerClass}>
      <img src={image} alt="Avatar" className={imageClass}></img>
      <span className={textClass}>{progressProcentage}%</span>
    </div>
  );
};

export default PlayerProgress;
