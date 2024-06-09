import logo from "./logo.svg";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import "./reset.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Carousel from "react-bootstrap/Carousel";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
