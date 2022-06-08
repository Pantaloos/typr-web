import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Text from "components/Text/Text";
import { Box } from "routes/Home/Home";
import { io } from "socket.io-client";
import React, { useState, useContext, useCallback, useEffect } from "react";
import { SocketContext } from "../../socket";

import "./Room.scss";

const Room = () => {
	const socket = useContext(SocketContext);

	useEffect(() => {
		console.log("SOCKET", socket);

		socket.on("connect", () => {
			socket.emit("joinRoom", { roomCode: "XLMLP", createUserDto: { name: "OOGABOOA" } });
		});
	}, [socket]);

	return (
		<div className="flex" style={{ width: "100vw", height: "100vh", position: "relative", bottom: "60px" }}>
			<div className="w-100 h-100" style={{ width: "380px", height: "600px" }}>
				<Box title="PLAYERS"></Box>
				<Button type="filled" textType="large-b" customStyle="fw-700 w-100 mt-24">
					START/READY
				</Button>
			</div>
			<div className="ml-5 w-100 h-100" style={{ width: "870px", height: "600px" }}>
				<Box title="MODES">
					<Text type="medium-b" customStyle="fc-light">
						CURRENTLY UNAVAILABLE, SET TO DEFAULT
					</Text>
				</Box>
			</div>
		</div>
	);
};

export default Room;
