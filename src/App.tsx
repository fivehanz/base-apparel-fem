import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.scss";
import HeroImgMobile from "./assets/hero-mobile.jpg";
import HeroImgDesktop from "./assets/hero-desktop.jpg";

function App() {
  return (
    <div className="App">
      <main>
        <img src={HeroImgDesktop} alt="" className="hero-image-desktop" />
        <Navbar />
        <img src={HeroImgMobile} alt="" className="hero-image-mobile" />
        <Hero />
      </main>
    </div>
  );
}

export default App;
