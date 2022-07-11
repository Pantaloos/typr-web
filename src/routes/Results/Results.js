import "./Results.scss";
import Button from "components/Button/Button";
import Box from "components/Box/Box";
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { SocketContext } from "../../socket";

const Results = () => {
	const { id: gameId } = useParams();
	const socket = useContext(SocketContext);
	const navigate = useNavigate();
	const { state } = useLocation();
	const { nickname, roomCode } = state;

	const [results, setResults] = useState([]);

	useEffect(() => {
		fetch(`https://${process.env.REACT_APP_API_URL}/result/game/${gameId}`)
			.then(response => {
				return response.json();
			})
			.then(data => {
				setResults(data);
			});

		socket.on("resultsUpdated", data => {
			setResults(data.results);
		});
	}, []);

	return (
		<div className="flex flex-v height100h">
			<div customStyle="main-div">
				<Box title="RESULTS" customStyle="header-padding" contentCustomStyle="container-height">
					<div className="flex-h space-between">
						<div className="flex-v">
							{results.map(data => (
								<span key={data.user.id} className="label-class label-text">
									{data.user.name}
								</span>
							))}
						</div>
						<div className="flex-v">
							{results.map(data => (
								<span key={data.user.id} className="points-color">
									{" "}
									{data.points} points
								</span>
							))}
						</div>
						<div className="flex-v">
							{results.map(data => (
								<span key={data.user.id} className="label-class label-text">
									{data.time} seconds / {data.mistakes} mistakes
								</span>
							))}
						</div>
					</div>
				</Box>
			</div>
			<div>
				<Button
					title="filled-btn"
					text="BACK"
					customStyle="my-button-left"
					onClick={() => {
						socket.emit("leaveRoom");
						navigate(`/`);
					}}
				></Button>
				<Button
					title="filled-btn"
					text="PLAY AGAIN"
					customStyle="my-button-right"
					onClick={() => {
						navigate(`/room/${roomCode}`, {
							state: { nickname: nickname },
						});
					}}
				></Button>
			</div>
		</div>
	);
};

export default Results;
