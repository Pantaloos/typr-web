import Text from "components/Text/Text";
import Button from "components/Button/Button";
import Player from "components/Player/Player";
import PlayerProgress from "components/PlayerProgress/PlayerProgress";

function App() {
	return (
		<div className="App">
			<Text type="giant">Typr - Example Giant</Text>
			<Text type="header" customStyle="mt-4">
				Typr - Example Header
			</Text>
			<Button type="action" customStyle="mt-4">
				PLAY
			</Button>
			<div></div>
			<Player customStyle="mt-4" iconHeight={40} iconWidth={40} textCustomStyle="pl-2" playerIcon = 'placeholder_player_image.png' playerName="levante" ></Player>
			<Player customStyle="mt-4" iconHeight={40} iconWidth={40} textCustomStyle="pl-2" playerIcon = 'placeholder_player_image2.jpg'></Player>
			<div style={{display:"flex"}}>
			<PlayerProgress customStyle="mt-4" iconHeight={40} iconWidth={40} playerIcon = 'placeholder_player_image.png'></PlayerProgress>
			<PlayerProgress customStyle="mt-4 pl-2" iconHeight={40} iconWidth={40} playerIcon = 'placeholder_player_image2.jpg'></PlayerProgress>
			</div>
		</div>
	);
}

export default App;
