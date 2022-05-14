import Text from "components/Text/Text";
import Button from "components/Button/Button";

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
		</div>
	);
}

export default App;
