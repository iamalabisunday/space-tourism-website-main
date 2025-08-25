import { NavLink } from "react-router-dom";
import SpaceLogo from "./SpaceLogo";

export default function NavBar() {
  return (
    <div className="relative w-full flex py-8">
      {/* Navigation Section */}
      <div className="container flex justify-between items-center mx-auto z-10">
        <SpaceLogo />
        <div className="w-[35rem] h-[1px] text-white opacity-[0.25]">
          <hr />
        </div>
        <nav className="w-fit h-auto flex justify-end items-center">
          <ul className="w-fit uppercase text-white flex gap-[3rem] justify-end items-center">
            <li>
              <NavLink to="/" className="h-[5.8125rem] flex items-center">
                <p className="w-fit flex gap-[0.75rem] font-[400] tracking-[0.125rem] text-[1rem]">
                  <span className="font-[700] tracking-[0.16875rem]">00</span>{" "}
                  Home
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/destination"
                className="h-[5.8125rem] flex items-center"
              >
                <p className="w-fit flex gap-[0.75rem] font-[400] tracking-[0.125rem] text-[1rem]">
                  <span className="font-[700] tracking-[0.16875rem]">01</span>
                  Destination
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/crew" className="h-[5.8125rem] flex items-center">
                <p className="w-fit flex gap-[0.75rem] font-[400] tracking-[0.125rem] text-[1rem]">
                  <span className="font-[700] tracking-[0.16875rem]">02</span>
                  Crew
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/technology"
                className="h-[5.8125rem] flex items-center"
              >
                <p className="w-fit flex gap-[0.75rem] font-[400] tracking-[0.125rem] text-[1rem]">
                  <span className="font-[700] tracking-[0.16875rem]">03</span>
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
