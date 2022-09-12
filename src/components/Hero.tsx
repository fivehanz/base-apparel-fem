const Hero = () => {
  return (
    <div className="container hero">
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
  );
};

export default Hero;
