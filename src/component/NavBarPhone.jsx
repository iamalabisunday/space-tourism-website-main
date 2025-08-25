import { NavLink } from "react-router-dom";
import SpaceLogo from "./SpaceLogo";
import Menu from "../component/assets/shared/icon-hamburger.svg";

export default function NavBarPhone() {
  return (
    <div className="relative w-full flex pt-8">
      {/* Navigation Section */}
      <div className="w-full mx-[1.5rem] flex justify-between items-center z-10">
        <SpaceLogo />
        <img src={Menu} alt="menu" />
      </div>
    </div>
  );
}
