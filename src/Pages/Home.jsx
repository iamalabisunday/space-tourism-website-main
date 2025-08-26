import { NavLink } from "react-router-dom";
import NavBar from "../component/NavBar.jsx";
import NavBarTable from "../component/NavBarTable.jsx";
import NavBarPhone from "../component/NavBarPhone.jsx";

export default function Home() {
  return (
    <div
      className="w-full lg:h-screen mx-auto min-h-screen justify-center items-center lg:bg-[url(/home/background-home-desktop.jpg))] md:bg-[url(/home/background-home-tablet.jpg)] 
        bg-[url(/home/background-home-mobile.jpg)] bg-cover bg-center bg-no-repeat"
    >
      <div className="w-full h-full flex flex-col mx-auto justify-center items-center">
        {/* Navigation Section */}
        <header className="lg:absolute lg:top-0 lg:left-0 w-full flex justify-between items-center">
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
        <section className="w-full lg:w-[69.375rem] lg:min-h-[39.5rem] p-[1.5rem] lg:p-0 flex flex-col lg:flex-row justify-center lg:justify-end items-center lg:items-end text-white md:py-[8rem] lg:py-[0rem] md:gap-[3rem]">
          {/* Text Section */}
          <div className="w-full mx-auto flex flex-col gap-[1rem]">
            <div className="w-full font-normal font-barlowCondensed text-[1rem] md:text-[1.75rem] tracking-[0.15rem] md:tracking-[0.25rem] uppercase flex justify-center lg:justify-start items-center lg:items-start">
              <p>So, you want to travel to</p>
            </div>
            <div className="w-full uppercase flex justify-center lg:justify-start items-center text-[5rem] md:text-[9rem] font-400 lg:leading-32">
              <h1 className="font-bellefair">Space</h1>
            </div>
            <div className="w-full font-barlow font-300 text-center lg:text-start leading-[1.6875rem] md:leading-[1.8rem] text-[0.9375rem] md:text-[1rem]">
              <p className="md:w-[65%] lg:w-[100%] md:mx-auto lg:mx-0">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
          </div>
          {/* Explore Button Section */}
          <div className="w-full p-[35%] md:p-[3rem] lg:p-0 flex justify-center lg:justify-end items-center">
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
    </div>
  );
}
