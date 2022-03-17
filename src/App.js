import "./App.css";
import Myheader from "./mycomponents/Myheader";
import Myfooter from "./mycomponents/Myfooter";
import Home from "./components/Home";
import Blog from "./components/Blog";
import About from "./mycomponents/About";
import Help from "./mycomponents/Help";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Signin from "./mycomponents/Signin";
import Account from "./mycomponents/Account";
import Login from "./mycomponents/Login";
import Modal from "./components/Modal";
import Blog_AddComment from "./components/Blog_AddComment";

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
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/add_comment" element={<Blog_AddComment />} />
          </Routes>
        </div>
        <Myfooter />
        <Routes>
          <Route path="/sign_in" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
