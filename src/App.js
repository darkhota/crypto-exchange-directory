import Exchanges from "./components/Exchanges";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Exchanges />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
