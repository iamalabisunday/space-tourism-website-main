import { NavLink } from "react-router-dom";
import SpaceLogo from "./SpaceLogo";

export default function NavBar() {
  return (
    <div className="relative w-full flex mt-4">
      {/* Navigation Section */}
      <div className=" container w-[90rem] h-auto  flex justify-between items-center mx-auto z-10 px-[4rem]">
        <SpaceLogo />
        <div className="w-[35rem] h-[1px] text-white opacity-[0.25]">
          <hr />
        </div>
        <nav>
          <ul className="w-fit uppercase text-white flex gap-[3rem] justify-end items-center">
            <li>
              <NavLink to="/" className="navLink">
                <p className="navtext">
                  <span className="navSpan">00</span> Home
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/destination" className="navLink">
                <p className="navtext">
                  <span className="navSpan">01</span>
                  Destination
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/crew" className="navLink">
                <p className="navtext">
                  <span className="navSpan">02</span>
                  Crew
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/technology" className="navLink">
                <p className="navtext">
                  <span className="navSpan">03</span>
                  Technology
                </p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      {/* Background Section */}
      <div className="absolute w-full h-full flex items-start justify-end">
        <div className="w-[50%] h-[5.8125rem] uppercase text-white flex gap-[3rem] bg-white/5 backdrop-blur-[40px] justify-end items-center px-[12.5rem]"></div>
      </div>
    </div>
  );
}
