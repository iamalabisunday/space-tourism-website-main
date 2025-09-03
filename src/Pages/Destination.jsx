// import { outlet } from "react-router-dom";
import NavBar from "../component/NavBar.jsx";
import NavBarTable from "../component/NavBarTable.jsx";
import NavBarPhone from "../component/NavBarPhone.jsx";
import Planet from "../component/Planet.jsx";

export default function Destination() {
  return (
    <div
      className="w-full mx-auto h-full justify-center items-center 
      lg:bg-[url(/destination/background-destination-desktop.jpg)] 
      md:bg-[url(/destination/background-destination-tablet.jpg)] 
      bg-[url(/destination/background-destination-mobile.jpg)] 
      bg-cover bg-center bg-no-repeat overflow-x-hidden"
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
        <section className="w-full lg:px-0 md:px-8 lg:w-[69.375rem] text-white flex flex-col gap-6 justify-center items-center md:my-8">
          {/* Heading text */}
          <div className="md:w-full w-fit flex md:justify-start justify-center lg:items-center md:gap-6 gap-3 md:text-[1.75rem] text-[1rem] font-barlowCondensed md:tracking-[0.25rem] tracking-[0.125rem] font-light">
            <span className="text-white opacity-25">01</span>
            <p className="uppercase">Pick your destination</p>
          </div>

          {/* ----------------------- Planet Section ------------------------------- */}
          <Planet />
          {/* <outlet /> */}
        </section>
      </div>
    </div>
  );
}
