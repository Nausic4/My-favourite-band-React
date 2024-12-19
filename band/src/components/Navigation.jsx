import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Navigation() {
  return (
    <div className="navigation">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt={logo}></img>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/band">The Wailers</NavLink>
          </li>
          <li>
            <NavLink to="/bob">Bob Marley</NavLink>
          </li>
          <li>
            <NavLink to="/peter">Peter Tosh</NavLink>
          </li>
          <li>
            <NavLink to="/junior">Junior Braithwaite</NavLink>
          </li>
          <li>
            <NavLink to="/bunny">Bunny Wailer</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
