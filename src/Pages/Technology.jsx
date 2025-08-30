import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../component/NavBar.jsx";
import NavBarTable from "../component/NavBarTable.jsx";
import NavBarPhone from "../component/NavBarPhone.jsx";
// import techImage from "/technology/image-launch-vehicle-portrait.jpg";
import TechnologyText from "../component/TechnologyText.jsx";

export default function Technology() {
  return (
    <div
      className="w-full mx-auto h-full justify-center items-center 
        lg:bg-[url(/technology/background-technology-desktop.jpg))] 
          md:bg-[url(/technology/background-technology-tablet.jpg)] 
            bg-[url(/technology/background-technology-mobile.jpg)] bg-cover bg-center bg-no-repeat"
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
        <section className="w-full lg:px-[0rem] md:px-[0rem] lg:w-[69.375rem] text-white flex flex-col gap-[1.5rem] justify-center items-center md:my-[2rem] ">
          {/* Heading text */}
          <div className="md:w-full w-fit flex md:justify-start justify-center lg:items-center md:gap-[1.5rem] gap-[0.8rem] md:text-[1.25rem] text-[1rem] font-barlowCondensed md:tracking-[0.1875rem] tracking-[0.15rem] font-200 md:px-[2rem]">
            <span className="text-white opacity-[0.25]">03</span>
            <p className="uppercase">Space Launch 101</p>
          </div>
          {/* -----------------------Main content Section------------------------------- */}
          <div className="lg:min-w-[69.4rem] lg:max-h-[40rem] md:h-full min-h-[43.8rem] flex flex-col-reverse lg:justify-center items-center lg:gap-[1.5rem] lg:py-[3.5rem] lg:grid lg:grid-cols-2">
            {/* Technology Text content */}
            <section className="lg:min-w-[33.7rem] flex flex-col lg:justify-center lg:items-center bg-green-900">
              {/* Text Content Section */}
              <div className="w-full h-full lg:min-h-[38.4rem] min-h-[17.4rem] flex flex-col md:justify-center justify-start lg:items-center items-start pt-[2.5rem] lg:pt-[0rem] bg-yellow-700">
                <div className="flex gap-[2rem] lg:w-full md:w-[70%] font-bellefair font-[300] text-center lg:text-start bg-blue-900">
                  <div className="w-fit flex flex-col justify-between">
                    <p className="w-[5rem] h-[5rem] rounded-full bg-white flex items-center justify-center text-[2rem] font-bellefair font-[300] text-primary">
                      1
                    </p>
                    <p className="w-[5rem] h-[5rem] rounded-full border-1 border-primary flex items-center justify-center text-[2rem] font-bellefair font-[300]">
                      2
                    </p>
                    <p className="w-[5rem] h-[5rem] rounded-full border-1 border-primary flex items-center justify-center text-[2rem] font-bellefair font-[300]">
                      3
                    </p>
                  </div>
                  <TechnologyText />
                </div>
              </div>
            </section>

            {/* Photo Section */}
            <div className="w-full lg:min-h-[38rem] md:min-h-[25rem] bg-primary bg-[url(/technology/image-launch-vehicle-portrait.jpg)] bg-cover bg-center bg-no-repeat lg:text-[2rem] md:text-[1.5rem] uppercase text-[1.125rem] md:mt-[2rem] lg:mt-[0rem]"></div>
          </div>
        </section>
      </div>
    </div>
  );
}

{
  /* <img src={techImage} alt="Technology" /> */
}
