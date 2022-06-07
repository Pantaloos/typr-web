import Home from "routes/Home";
import Results from "routes/Results";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/result" element={<Results />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
