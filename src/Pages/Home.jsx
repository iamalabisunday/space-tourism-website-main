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
      <div className="absolute top-0 left-0 w-full flex flex-col justify-center items-center">
        {/* Navigation Section */}
        <header className="w-full flex justify-between items-center">
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
        {/* Text and Explore Section */}
        <section className="w-full p-[1.5rem] flex flex-col justify-center items-center text-white">
          {/* Text Section */}
          <div className="w-full mx-auto flex flex-col gap-[1rem]">
            <div className="w-full font-normal font-barlowCondensed text-[1rem] tracking-[0.15rem] uppercase flex justify-center items-center">
              <p>So, you want to travel to</p>
            </div>
            <div className="w-full uppercase flex justify-center items-center text-[5rem] leading-20 font-400">
              <h1 className="font-bellefair">Space</h1>
            </div>
            <div className="w-full font-barlow font-200 text-center leading-[180%] text-[0.9375rem]">
              <p>
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
          </div>
          {/* Explore Button Section */}
          <div className="w-full min-h-[21.4rem] flex justify-center items-center">
            <div className="w-fit">
              <NavLink
                to="/destination"
                className="w-[9rem] h-[9rem] md:w-[17rem] md:h-[17rem] rounded-full bg-white text-[1rem] md:text-[2rem] text-primary flex justify-center items-center hover:scale-110 hover:shadow-[0_0_0_40px_rgba(255,255,255,0.1)] hover:transition-all hover:ease-in-out hover:duration-300 cursor-pointer font-bellefair font-light"
              >
                EXPLORE
              </NavLink>
            </div>
          </div>
        </section>
      </div>

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
