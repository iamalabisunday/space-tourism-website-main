import { NavLink } from "react-router-dom";
import NavBar from "../component/NavBar.jsx";
import NavBarTable from "../component/NavBarTable.jsx";
import NavBarPhone from "../component/NavBarPhone.jsx";
import Planet from "../component/Planet.jsx";

export default function Destination() {
  return (
    <div
      className="w-full mx-auto min-h-screen justify-center items-center lg:bg-[url(/destination/background-destination-desktop.jpg))] 
      md:bg-[url(/destination/background-destination-tablet.jpg)] 
          bg-[url(/destination/background-destination-mobile.jpg)] bg-cover bg-center bg-no-repeat"
    >
      <div className="w-full h-full flex flex-col mx-auto justify-start items-center lg:gap-[3rem]">
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
        <section className="w-full lg:w-[69.375rem] text-white flex flex-col lg:gap-[1.5rem] bg-green-900">
          {/* Heading text */}
          <div className="w-full flex lg:justify-start lg:items-center lg:gap-[1.5rem] lg:text-[1.75rem] font-barlowCondensed tracking-[0.25rem] font-200">
            <span className="text-white opacity-[0.25]">01</span>
            <p className="uppercase">Pick your destination</p>
          </div>
          {/* ------------------------------------------------------ */}
          <article className="w-full bg-blue-900">
            <Planet />
          </article>
        </section>
      </div>
    </div>
  );
}
