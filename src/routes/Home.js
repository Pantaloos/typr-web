import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Room from "components/Room/Room";
import Text from "components/Text/Text";
import "./Home.scss";

const Box = ({ title, children }) => {
	return (
		<div className="w-100 h-100">
			<Text type="basic" customStyle="box-title">
				{title}
			</Text>
			<div className="w-100 h-100 box-container">{children}</div>
		</div>
	);
};

function Home() {
	return (
		<div className="flex flex-v">
			<Text type="giant" customStyle="siteName">
				TYPR.IO
			</Text>
			<div className="flex flex-align-start">
				<div style={{ width: "360px", marginRight: "24px" }}>
					<Button type="filled" textType="large-b" customStyle="fw-700 w-100 mb-2">
						PLAY
					</Button>
					<Box title="JOIN A ROOM">
						<div className="flex mb-4">
							<Input
								type="single"
								label="CODE"
								customLabelClass="label-class"
								customInputClass="input-code"
								containerStyle="mr-4"
								maxLength="4"
							/>

							<Input
								type="single"
								label="NICKNAME"
								customLabelClass="label-class"
								customInputClass="input-code"
								maxLength="12"
							></Input>
						</div>
					</Box>
					<Button type="filled" textType="large-b" customStyle="fw-700 w-100 mb-2">
						JOIN
					</Button>
				</div>

				<div style={{ width: "660px", height: "300px" }}>
					<Box title="AVAILABLE ROOMS">
						<Room
							roomName="test"
							numberOfPeople="8"
							customStyle="mt-4 background-dark-b"
						></Room>
						<Room
							roomName="levante"
							numberOfPeople="4"
							customStyle="mt-4 background-dark-b"
						></Room>
					</Box>
				</div>
			</div>
		</div>
	);
}

export default Home;
