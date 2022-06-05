import "./Player.scss";

const Player = ({
	type = "lobby",
	textType = "basic",
	customStyle = "",
	textCustomStyle="",
	name = "",
	children,
	iconWidth = 50,
	iconHeight= 50,
	playerIcon = 'placeholder_player_image.png',
	playerName = " placeholder name",
	...props
}) => {
	const iconTypeClass = type;
	const textTypeClass = textType;
	const iconClassName = `${iconTypeClass} ${textTypeClass}-text ${customStyle}`;

	const images = require.context('../../assets/icons/', true);
	const image = images(`./${playerIcon}`);

	return (
		<div className={iconClassName} style={{display:"flex"}}>
			<img src={image} alt="Avatar" style={{width:iconWidth , height: iconHeight , borderRadius: iconHeight/ 2}}></img>
			<span className={textCustomStyle} style={{display: "flex", alignItems:"center", color: "#b4caea"}}>
				{playerName}
			</span>
		</div>
	);
};

export default Player;