import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Signin from "./mycomponents/Signin";
import Login from "./mycomponents/Login";

function App() {
    const text = 'Plain text exclusively consists of character representation. Each character is represented by a fixed-length sequence of one, two, or four bytes, or as a variable-length sequence of one to four bytes, in accordance to specific character encoding conventions, such as ASCII, ISO/IEC 2022, UTF-8, or Unicode. These conventions define many printable characters, but also non-printing characters that control the flow of the text, such as space, line break, and page break. Plain text contains no other information about the text itself, not even the character encoding convention employed. Plain text is stored in text files, although text files do not exclusively store plain text. In the early days of computers, plain text was displayed using a monospace font, such that horizontal alignment and columnar formatting were sometimes done using whitespace characters. This tradition has not changed. ';
    return (
        // <Router>
        //     <div className="App__body">
        //         {/* <Routes>
        //     <Route path="/login" element={<Login />} />
        //   </Routes> */}
        //         <Login />
        //     </div>
        // </Router>
        <div className="App">
            <Login />
        </div>
    );
}

export default App;
