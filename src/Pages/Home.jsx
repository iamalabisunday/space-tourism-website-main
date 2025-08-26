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
      <section className="absolute w-full h-fit mt-[40%] sm:mt-[0] xl:mx-auto flex xl:justify-center xl:items-center text-white">
        <article className="xl:max-w-[69.375rem] xl:min-h-[38.5rem] flex xl:flex-col xl:justify-end xl:items-end flex-row justify-center items-center">
          <section className="w-full xl:h-[21.4375rem] flex xl:flex-row xl:justify-end xl:items-end flex-col ">
            <div className="w-full xl:grid xl:grid-cols-2 xl:gap-[3rem] flex flex-col justify-center items-center xl:items-start">
              {/* Text Section */}
              <div className="xl:w-full min-h-[21.4375rem] flex flex-col gap-6 xl:align-item:start xl:justify-center mx-[1.5rem]">
                <p className="w-full font-barlowCondensed text-[1rem] md:text-[1.75rem] font-[400] tracking-[0.25rem] leading-auto text-secondaryBlue uppercase flex justify-center items-center text-center xl:justify-start ">
                  So, you want to travel to
                </p>
                <h1 className="w-full font-bellefair text-[5rem] md:text-[9rem] font-normal uppercase text-white leading-[1] flex justify-center items-center text-center xl:justify-start">
                  Space
                </h1>
                <p
                  className="xl:max-w-full lg:max-w-[58%] mx-auto font-barlow text-[0.9375rem] md:text-[1.125rem] leading-[1.8] font-[200] text-secondaryBlue flex justify-center items-center text-center md:text-start
                "
                >
                  Let’s face it; if you want to go to space, you might as well
                  genuinely go to outer space and not hover kind of on the edge
                  of it. Well sit back, and relax because we’ll give you a truly
                  out of this world experience!
                </p>
              </div>
              {/* Explore Section */}
              <div className="h-auto xl:w-full flex justify-end items-center">
                <NavLink
                  to="/destination"
                  className="w-[9rem] h-[9rem] md:w-[17rem] md:h-[17rem] rounded-full bg-white text-[1rem] md:text-[2rem] text-primary flex justify-center items-center hover:scale-110 hover:shadow-[0_0_0_40px_rgba(255,255,255,0.1)] hover:transition-all hover:ease-in-out hover:duration-300 cursor-pointer font-bellefair font-light"
                >
                  EXPLORE
                </NavLink>
              </div>
            </div>
          </section>
        </article>
      </section>
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
