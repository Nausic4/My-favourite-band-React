import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

function Navigation() {
  return (
    <div className="navigation">
      <div className="logo">
        <Link to="/">
          <img className="exclude" src={logo} alt={logo}></img>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/bob">
              <b>Bob Marley</b>
            </NavLink>
          </li>
          <li>
            <NavLink to="/peter">
              <b>Peter Tosh</b>
            </NavLink>
          </li>
          <li>
            <NavLink to="/junior">
              <b>Junior Braithwaite</b>
            </NavLink>
          </li>
          <li>
            <NavLink to="/bunny">
              <b>Bunny Wailer</b>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
