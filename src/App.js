import "./App.css";
import Myheader from "./mycomponents/Myheader";
import Myfooter from "./mycomponents/Myfooter";
import Home from "./components/Home";
import About from "./mycomponents/About";
import Help from "./mycomponents/Help";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Myheader />
        <div className="App__body">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Myfooter />
      </div>
    </Router>
  );
}

export default App;
