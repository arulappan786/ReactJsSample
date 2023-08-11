import "./index.css";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const year = new Date();

  return (
    <div>
      <Header title="To do List" />
      <Content />
      <Footer year={year.getFullYear()}></Footer>
    </div>
  );
}

export default App;
