import Text from "components/Text/Text";
import Button from "components/Button/Button";
import Input from "components/Input/Input";

function App() {
	return (
		<div className="App">
			<Text type="giant" customStyle="landing-title color-light">
				Typr - Example Giant
			</Text>
			<Text type="header" customStyle="landing-title color-light">
				Typr - Example Giant
			</Text>
			<Button type="action" customStyle="mt-4">
				PLAY
			</Button>
			<Input containerStyle = "flex" type = "single" label = "Nickname" maxLength="12"></Input>
			<Input containerStyle="flex" type= "multiple"></Input>
		</div>
	);
}

export default App;
