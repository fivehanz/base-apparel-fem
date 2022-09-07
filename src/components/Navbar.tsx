import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="base-apparel-logo" className="logo" />
    </nav>
  );
};

export default Navbar;
