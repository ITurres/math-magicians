import { Link } from 'react-router-dom';
import logo from '../assets/media/math-magicians-logo.png';

const Header = () => (
  <header>
    <nav className="navbar container p-2">
      <img src={logo} width="90" height="90" alt="logo" />
      <ul className="d-flex list-unstyled mb-0">
        <li className="list-inline-item navbar__item">
          <Link to="/math-magicians/">Home</Link>
        </li>
        <li className="list-inline-item navbar__item">
          <Link to="/math-magicians/calculator">Calculator</Link>
        </li>
        <li className="list-inline-item navbar__item">
          <Link to="/math-magicians/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
