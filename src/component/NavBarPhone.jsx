import { NavLink } from "react-router-dom";
import { useState } from "react";
import Open from "../component/assets/shared/icon-hamburger.svg";
import Close from "../component/assets/shared/icon-close.svg";
import Logo from "../component/assets/shared/logo.svg";

export default function NavBarPhone() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative w-full flex p-[1.5rem]">
      {/* Top bar */}
      <div className="w-full flex justify-between items-center z-20">
        <img src={Logo} alt="Logo" className="w-[2.5rem] h-[2.5rem]" />
        <img
          onClick={toggleMenu}
          src={isOpen ? Close : Open}
          alt="menu-cancel"
          className="cursor-pointer w-[1.5rem] h-[1.5rem]"
        />
      </div>

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[70%] bg-[rgba(11,13,23,0.15)] backdrop-blur-[40px] shadow-lg pl-6 pt-[4rem] z-10 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="space-y-[2rem] text-lg font-medium mt-12">
          <li className="navBarMobile">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className="w-full text-white text-[1rem] font-barlowCondensed tracking-[0.125rem]"
            >
              <p>
                <span className="navSpan">00</span> Home
              </p>
            </NavLink>
          </li>
          <li className="navBarMobile">
            <NavLink
              to="/destination"
              onClick={toggleMenu}
              className="w-full text-white text-[1rem] font-barlowCondensed tracking-[0.125rem]"
            >
              <p>
                <span className="navSpan">01</span> Destination
              </p>
            </NavLink>
          </li>
          <li className="navBarMobile">
            <NavLink
              to="/crew"
              onClick={toggleMenu}
              className="w-full text-white text-[1rem] font-barlowCondensed tracking-[0.125rem]"
            >
              <p>
                <span className="navSpan">02</span> Crew
              </p>
            </NavLink>
          </li>
          <li className="navBarMobile">
            <NavLink
              to="/technology"
              onClick={toggleMenu}
              className="w-full text-white text-[1rem] font-barlowCondensed tracking-[0.125rem]"
            >
              <p>
                <span className="navSpan">03</span> Technology
              </p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
