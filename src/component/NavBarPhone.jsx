import Menu from "../component/assets/shared/icon-hamburger.svg";
import Logo from "../component/assets/shared/logo.svg";

export default function NavBarPhone() {
  return (
    <div className="relative w-full flex p-[1.5rem]">
      {/* Navigation Section */}
      <div className="w-full flex justify-between items-center z-10">
        <img src={Logo} alt="Logo" className="w-[2.5rem] h-[2.5rem]" />
        <img src={Menu} alt="menu" />
      </div>
    </div>
  );
}
