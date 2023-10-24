import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div id="navbar">
      <ul className="nav">
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
