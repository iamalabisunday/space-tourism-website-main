import { NavLink } from "react-router-dom";
import Background from "../component/assets/home/background-home-desktop.jpg";
import BackgroundMobile from "../component/assets/home/background-home-mobile.jpg";
import BackgroundTablet from "../component/assets/home/background-home-tablet.jpg";
import NavBar from "../component/NavBar.jsx";
import NavBarTable from "../component/NavBarTable.jsx";
import NavBarPhone from "../component/NavBarPhone.jsx";

export default function Home() {
  return (
    <div className="w-full h-screen my-auto relative bg-primary bg-cover bg-no-repeat bg-center bg-fixed">
      {/* Navigation Section */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center">
        {/* Laptop (lg and up) */}
        <div className="w-full hidden lg:block">
          <NavBar />
        </div>

        {/* Tablet (sm to lg-1) */}
        <div className="w-full hidden sm:block lg:hidden">
          <NavBarTable />
        </div>

        {/* Phone (below sm) */}
        <div className="w-full block sm:hidden">
          <NavBarPhone />
        </div>
      </header>
      {/* Text Section */}

      {/* Background Section */}
      <picture>
        <source
          media="(max-width: 600px)"
          srcSet={BackgroundMobile}
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        />
        <source media="(max-width: 992px)" srcSet={BackgroundTablet} />
        <img
          src={Background}
          alt="Background"
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        />
      </picture>
    </div>
  );
}

{
  /* <div className="h-auto xl:w-full flex justify-end items-center">
  <NavLink
    to="/destination"
    className="w-[9rem] h-[9rem] md:w-[17rem] md:h-[17rem] rounded-full bg-white text-[1rem] md:text-[2rem] text-primary flex justify-center items-center hover:scale-110 hover:shadow-[0_0_0_40px_rgba(255,255,255,0.1)] hover:transition-all hover:ease-in-out hover:duration-300 cursor-pointer font-bellefair font-light"
  >
    EXPLORE
  </NavLink>
</div>; */
}
