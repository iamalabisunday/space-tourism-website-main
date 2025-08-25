import { NavLink } from "react-router-dom";
import SpaceLogo from "./SpaceLogo";

export default function NavBarTable() {
  return (
    <div className="relative w-full flex">
      {/* Navigation Section */}
      <div className="w-full mx-[3rem] flex justify-between items-center z-10">
        <SpaceLogo />
        <nav>
          <ul className="w-fit uppercase text-white flex gap-[3rem] justify-end items-center">
            <li>
              <NavLink to="/" className="navLink">
                <p className="navtext">
                  <span className="navSpan navNumber">00</span> Home
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/destination" className="navLink">
                <p className="navtext">
                  <span className="navSpan navNumber">01</span>
                  Destination
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/crew" className="navLink">
                <p className="navtext">
                  <span className="navSpan navNumber">02</span>
                  Crew
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/technology" className="navLink">
                <p className="navtext">
                  <span className="navSpan navNumber">03</span>
                  Technology
                </p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      {/* Background Section */}
      <div className="absolute w-full h-full flex items-start justify-end">
        <div className="w-[80%] h-[5.8125rem] uppercase text-white flex gap-[3rem] bg-white/5 backdrop-blur-[40px] justify-end items-center px-[12.5rem]"></div>
      </div>
    </div>
  );
}
