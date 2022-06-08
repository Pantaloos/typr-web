import Home from "routes/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Room from "routes/Room/Room";
import { SocketContext, socket } from "./socket";

function App() {
	return (
		<SocketContext.Provider value={socket}>
			<Router>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/room" element={<Room />}></Route>
				</Routes>
			</Router>
		</SocketContext.Provider>
	);
}

export default App;
