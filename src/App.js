import "./App.css";
import Card from "./components/Card";
import Blog from "./components/Blog";
import CreateBlog from "./components/CreateBlog";
import AddComment from "./components/AddComment";

function App() {
  return (
    <div className="App">
      <div className="App__body">
        {/* <Card img='https://picsum.photos/200/300' title='Blog Title' desc='Bolg Descriptions' />
        <Card img='https://picsum.photos/200/300' title='Blog Title' desc='Bolg Descriptions' />
        <Card img='https://picsum.photos/200/300' title='Blog Title' desc='Bolg Descriptions' />
        <Blog author_av='https://picsum.photos/200/300' img='https://picsum.photos/200/300' title='Some title' desc='some description on the given topic' />
        <AddComment /> */}
        <CreateBlog />
      </div>
    </div>
  );
}

export default App;
