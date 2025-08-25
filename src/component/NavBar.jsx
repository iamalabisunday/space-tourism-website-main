import { NavLink } from "react-router-dom";
import SpaceLogo from "./SpaceLogo";

export default function NavBar() {
  return (
    <div className="w-full h- flex justify-between items-center gap-[24rem] ml-[12.5rem] py-8">
      <SpaceLogo />
      <nav className="w-full h-auto flex justify-end">
        <ul className="w-fit uppercase text-white flex gap-[3rem] bg-white/5 justify-end items-center px-[12.5rem]">
          <li>
            <NavLink to="/" className="h-[5.8125rem] flex items-center">
              00 Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              className="h-[5.8125rem] flex items-center"
            >
              01 Destination
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew" className="h-[5.8125rem] flex items-center">
              02 Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className="h-[5.8125rem] flex items-center"
            >
              03 Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
