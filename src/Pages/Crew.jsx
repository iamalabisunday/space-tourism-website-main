import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../component/NavBar.jsx";
import NavBarTable from "../component/NavBarTable.jsx";
import NavBarPhone from "../component/NavBarPhone.jsx";
import CrewText from "../component/CrewText.jsx";
import CrewPhoto from "../component/CrewPhoto.jsx";

export default function Crew() {
  return (
    <div
      className="w-full mx-auto h-full justify-center items-center 
      lg:bg-[url(/crew/background-crew-desktop.jpg)] 
        md:bg-[url(/crew/background-crew-tablet.jpg)] 
          bg-[url(/crew/background-crew-mobile.jpg)] bg-cover bg-center bg-no-repeat"
    >
      <div className="w-full flex flex-col min-h-screen mx-auto lg:justify-start justify-start items-center">
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
        <section className="w-full lg:px-[0rem] md:px-[2rem] lg:w-[69.375rem] text-white flex flex-col gap-[1.5rem] justify-center items-center md:my-[2rem]">
          {/* Heading text */}
          <div className="md:w-full w-fit flex md:justify-start justify-center lg:items-center md:gap-[1.5rem] gap-[0.8rem] md:text-[1.25rem] text-[1rem] font-barlowCondensed md:tracking-[0.1875rem] tracking-[0.15rem] font-200 ">
            <span className="text-white opacity-[0.25]">02</span>
            <p className="uppercase">Meet your Crew</p>
          </div>
          {/* -----------------------Main content Section------------------------------- */}
          <div className="lg:min-w-[69.4rem] lg:max-h-[40rem] md:h-full min-h-[43.8rem] flex lg:flex-row flex-col lg:justify-start items-center lg:gap-[1.5rem] lg:py-[3.5rem] lg:px-[0rem] px-[1.5rem]">
            <section className="lg:min-w-[33.7rem] flex flex-col lg:justify-center lg:items-center">
              {/* Text Content Section */}
              <div className="w-full h-full lg:min-h-[38.4rem] min-h-[17.4rem] flex flex-col md:justify-center justify-start lg:items-center items-start pt-[2.5rem] lg:pt-[0rem]">
                <div className="lg:w-full md:w-[70%] font-bellefair font-[300] text-center lg:text-start"></div>
                <CrewText />
                <Outlet />
              </div>
              {/* Navigation Section */}
              <div className="w-full">
                <nav>
                  <ul className="flex lg:gap-[2.5rem] lg:justify-start justify-center items-center gap-[1rem]">
                    <li className="crew">
                      <NavLink to="/crew/commander">
                        <div className="lg:w-[1rem] lg:h-[1rem] w-[0.65rem] h-[0.65rem] rounded-full bg-white opacity-[0.5] crewMode"></div>
                      </NavLink>
                    </li>
                    <li className="crew">
                      <NavLink to="/crew/mission">
                        <div className="lg:w-[1rem] lg:h-[1rem] w-[0.65rem] h-[0.65rem] rounded-full bg-white opacity-[0.5] crewMode"></div>
                      </NavLink>
                    </li>
                    <li className="crew">
                      <NavLink to="/crew/pilot">
                        <div className="lg:w-[1rem] lg:h-[1rem] w-[0.65rem] h-[0.65rem] rounded-full bg-white opacity-[0.5] crewMode"></div>
                      </NavLink>
                    </li>
                    <li className="crew">
                      <NavLink to="/crew/engineer">
                        <div className="lg:w-[1rem] lg:h-[1rem] w-[0.65rem] h-[0.65rem] rounded-full bg-white opacity-[0.5] crewMode"></div>
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </section>
            {/* Photo Section */}
            <div className="lg:w-full md:w-[70%] w-full mt-[2.5rem] md:mt-[0rem] font-bellefair font-[300] text-center lg:text-start">
              <div className="lg:text-[2rem] md:text-[1.5rem] uppercase text-[1.125rem]">
                <CrewPhoto />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
