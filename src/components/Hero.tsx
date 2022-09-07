import HeroImgMobile from "../assets/hero-mobile.jpg";
import HeroImgDesktop from "../assets/hero-desktop.jpg";

const Hero = () => {
  return (
    <main>
      <img src={HeroImgMobile} alt="" className="hero-image-mobile" />
      <img src={HeroImgDesktop} alt="" className="hero-image-desktop" />
      <div className="container">
        <h1 className="hero-title">
          <span>We're</span> coming soon
        </h1>
        <p className="hero-subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing praesentium elit. A
          explicabo quo sed natus praesentium, modi odit!
        </p>
        <div className="hero-input-group">
          <input
            type="email"
            className="hero-input"
            placeholder="Email Address"
            required
          />
          <button className="hero-submit">Go</button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
