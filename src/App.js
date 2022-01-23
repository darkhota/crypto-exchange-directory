import Exchanges from "./components/Exchanges";
import Details from "./components/Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StyledApp } from "./styles/app.styles";

function App() {
  return (
    <StyledApp>
      <Router>
        <Routes>
          <Route exact path="/" element={<Exchanges />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
      </Router>
    </StyledApp>
  );
}

export default App;
