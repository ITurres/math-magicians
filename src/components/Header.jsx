import { Link } from 'react-router-dom';
import logo from '../assets/media/math-magicians-logo.png';

const Header = () => (
  <header>
    <nav className="navbar container p-2">
      <img src={logo} width="90" height="90" alt="logo" />
      <ul className="d-flex list-unstyled mb-0">
        <li className="list-inline-item navbar__item">
          <Link to="/">Home</Link>
        </li>
        <li className="list-inline-item navbar__item">
          <Link to="/calculator">Calculator</Link>
        </li>
        <li className="list-inline-item navbar__item">
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
