import "./PlayerProgress.scss";

const PlayerProgress = ({
	type = "lobby",
	textType = "basic",
	customStyle = "",
	textCustomStyle="",
	name = "",
	children,
	iconWidth = 50,
	iconHeight= 50,
    progressProcentage = 0,
	playerIcon = 'placeholder_player_image.png',
	...props
}) => {
	const iconTypeClass = type;
	const textTypeClass = textType;
	const iconClassName = `${iconTypeClass} ${textTypeClass}-text ${customStyle}`;

	const images = require.context('../../assets/icons/', true);
	const image = images(`./${playerIcon}`);

	return (
		<div className={iconClassName} style={{display:"flex", flexDirection:"column"}}>
			<img src={image} alt="Avatar" style={{width:iconWidth , height: iconHeight , borderRadius: iconHeight/ 2}}></img>
            <span className={textCustomStyle} style={{display:"table", margin:"0 auto" ,color: "#b4caea"}}>
				{progressProcentage}%
			</span>
		</div>
	);
};

export default PlayerProgress;