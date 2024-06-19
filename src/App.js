import logo from "./logo.svg";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import "./reset.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Carousel from "react-bootstrap/Carousel";
import store from "./redux/store";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 600) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  if (isSmallScreen) {
    return (
      <div>
        <h1>Thông báo</h1>
        <p>
          Thiết bị của bạn không được hỗ trợ. Vui lòng sử dụng thiết bị có màn
          hình lớn hơn .
        </p>
      </div>
    );
  }
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
