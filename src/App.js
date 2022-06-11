import Home from "routes/Home/Home";
import Room from "routes/Room/Room";
import Game from "routes/Game/Game";
import Results from "routes/Results/Results";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SocketContext, socket } from "./socket";

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/room/:id" element={<Room />}></Route>
          <Route path="/game/:id" element={<Game />}></Route>
          <Route path="/result/:id" element={<Results />}></Route>
        </Routes>
      </Router>
    </SocketContext.Provider>
  );
}

export default App;
