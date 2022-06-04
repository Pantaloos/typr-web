import Text from "components/Text/Text";
import Button from "components/Button/Button";
import {ReactComponent as ReactLogo} from "./icons/rightArrow.svg"	

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
			<Button type="filled" customStyle="mt-4">
				START/READY
			</Button>
			<div></div>
			<Button type="outline" customStyle="mt-4">
				basic
			</Button>
			<div/>
			<Button type="filled-with-icon" customStyle="mt-4" style={{width: "50px", height : "50px"}}>
				<div className="icon-container">
				<ReactLogo width = {25} height = {25} />
				</div>
			</Button>
		</div>
	);
}

export default App;
