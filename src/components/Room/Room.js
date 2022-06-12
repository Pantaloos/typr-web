import "./Room.scss";
import { ReactComponent as ReactLogo } from "../../assets/icons/rightArrow.svg";
import Button from "components/Button/Button";

const Room = ({
  type = "basic",
  customStyle = "",
  roomName = "",
  numberOfPeople = "",
  value = "",
  children,
  onClick,
  ...props
}) => {
  const roomClassName = `${type}-room ${customStyle}`;

  const handleClick = (e) => {
    if (onClick) onClick(value);
  };

  return (
    <div {...props} className={roomClassName}>
      <div className="roomLeftSide">{roomName}</div>

      <div className="roomRightside">
        <div className="numberOfpeople">{numberOfPeople}/10 players</div>
        <Button type="filled-with-icon" onClick={handleClick}>
          <div className="icon-container">
            <ReactLogo width={50} height={50} />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Room;
