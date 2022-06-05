import Text from "components/Text/Text";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Room from "components/Room/Room";
import {ReactComponent as ReactLogo} from "./assets/icons/rightArrow.svg"	

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
			<Input containerStyle = "flex" type = "single" label = "Nickname" maxLength="12"></Input>
			<Input containerStyle="flex" type= "multiple"></Input>
			<div></div>
			<Button type="filled">
				START/READY
			</Button>
			<div></div>
			<Button type="outline" style={{padding:20 ,fontSize:24}}>
				basic
			</Button>
			<div/>
			<Button type="filled-with-icon">
				<div className="icon-container">
				<ReactLogo width = {25} height = {25} />
				</div>
			</Button>
			<Room roomName="test" numberOfPeople="8" onClick={()=>{console.log("bruh")}}>
			</Room>
		</div>
	);
}

export default App;
