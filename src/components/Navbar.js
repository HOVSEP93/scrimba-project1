import airbnbLogo from '../images/logo-my-app.png';

export default function Navbar() {
  return (
    <nav>
      <img className="nav--logo" src={airbnbLogo} alt="airbnb logo" />
    </nav>
  );
}
