import "./App.css";
import MiniNavBar from "./components/MiniNavBar/MiniNavBar";
import Navbar from "./components/Navbar/Navbar";
import Carousel from "./components/Carousel/Carousel";
import Properties from "./components/Properties/Properties";
import Featured from "./components/Featured/Featured";
import Deals from "./components/Deals/Deals";
import Video from "./components/Video/Video";
import MiniCards from "./components/MiniCards/MiniCard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <MiniNavBar />
      <Navbar />
      <Carousel />
      <Featured />
      <Video />
      <MiniCards />
      <Deals />
      <Properties />
      <Footer />
      <div className="mini-footer">
          <p>
            Copyright &copy; 2048 Villa Agency Co, Ltd All rights reserved - Desighn: TemplateMo
          </p>
      </div>
    </>
  );
}

export default App;
