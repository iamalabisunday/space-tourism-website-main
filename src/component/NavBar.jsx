import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul className="uppercase text-white bg-red-700">
        <li>
          <NavLink to="/">00 Home</NavLink>
        </li>
        <li>
          <NavLink to="/destination">01 Destination</NavLink>
        </li>
        <li>
          <NavLink to="/crew">02 Crew</NavLink>
        </li>
        <li>
          <NavLink to="/technology">03 Technology</NavLink>
        </li>
      </ul>
    </nav>
  );
}
