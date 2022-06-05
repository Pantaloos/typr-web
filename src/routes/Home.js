import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Room from "components/Room/Room";
import Text from "components/Text/Text";
import "./Home.scss";
function home() {
	return (
		<div className="rootDiv">
            <Text type="giant" customStyle="siteName"> TYPR.IO</Text>
            <div id="top-container">
                <div id="left-div">
                    <Button type="filled" customStyle="left-btn" > PLAY</Button>
                    <div className="top-container">
                        <Text type="basic" customStyle="center-text">JOIN A ROOM</Text>
                        <div style={{display:"flex"}}>
                            
                            <div className="inputs-container">
                                <Input type="single" label="CODE" customLabelClass="label-class" customInputClass="input-code" maxLength="4" ></Input>
                            </div>

                            <div className="inputs-container">
                                <Input type="single" label="NICKNAME" customLabelClass="label-class" customInputClass="input-code" maxLength="12" ></Input>
                            </div>

                        </div>
                        <Button type="filled"  customStyle="left-btn"> JOIN</Button>
                    </div>
                </div>

                
                <div id="right-div">
                    <Text type="basic" customStyle="center-text">AVAILABLE ROOMS</Text>
                    <div className="rootDiv background-dark-a fillWidth">
                        <Room roomName="test" numberOfPeople="8" customStyle="mt-4 background-dark-b"></Room>
                        <Room roomName="levante" numberOfPeople="4" customStyle="mt-4 background-dark-b"></Room>
                    </div>
                </div>
            </div>
		</div>
	);
}

export default home;

//todo change rootDiv name to flex-colunm