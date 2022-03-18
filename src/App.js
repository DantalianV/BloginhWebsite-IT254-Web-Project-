import "./App.css";
import Myheader from "./mycomponents/Myheader";
import Myfooter from "./mycomponents/Myfooter";
import Home from "./components/Home";
import Blog from "./components/Blog";
import CreateBlog from "./components/CreateBlog";
import About from "./mycomponents/About";
import Help from "./mycomponents/Help";
import Body from "./mycomponents/body";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Signin from "./mycomponents/Signin";
import Account from "./mycomponents/Account";
import Login from "./mycomponents/Login";
import Blog_AddComment from "./components/Blog_AddComment";

function App() {
  const text = 'Plain text exclusively consists of character representation. Each character is represented by a fixed-length sequence of one, two, or four bytes, or as a variable-length sequence of one to four bytes, in accordance to specific character encoding conventions, such as ASCII, ISO/IEC 2022, UTF-8, or Unicode. These conventions define many printable characters, but also non-printing characters that control the flow of the text, such as space, line break, and page break. Plain text contains no other information about the text itself, not even the character encoding convention employed. Plain text is stored in text files, although text files do not exclusively store plain text. In the early days of computers, plain text was displayed using a monospace font, such that horizontal alignment and columnar formatting were sometimes done using whitespace characters. This tradition has not changed. ';
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
            <Route path="/blog" element={<Blog author_av='Bal blabla' img='https://picsum.photos/200/300' title='Some Title' desc='Some Plain text exclusively consists of character representation. Each character is represented by a fixed-length sequence of one, two, or four bytes, or as a variable-length sequence of one to four bytes, in accordance to specific character encoding conventions,' blog_text={text} />} />
            <Route path="/blog/add_comment" element={<Blog_AddComment />} />
            <Route path="/create_blog" element={<CreateBlog />} />
          </Routes>
        </div>
        <Myfooter />
      </div>
    </Router>
  );
}

export default App;
