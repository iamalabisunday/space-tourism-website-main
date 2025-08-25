import { NavLink } from "react-router-dom";
import Background from "../component/assets/home/background-home-desktop.jpg";
import BackgroundMobile from "../component/assets/home/background-home-mobile.jpg";
import BackgroundTablet from "../component/assets/home/background-home-tablet.jpg";
import NavBar from "../component/NavBar.jsx";

export default function Home() {
  return (
    <div className="w-full h-screen my-auto relative">
      {/* Navigation Section */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center">
        <NavBar />
      </header>
      <section className="absolute w-full h-screen mx-auto flex justify-center items-center text-white">
        <article className="max-w-[69.375rem] min-h-[38.5rem] flex flex-col justify-end items-end">
          <section className="w-full h-[21.4375rem] flex flex-row justify-end items-end">
            <div className="w-full grid grid-cols-2">
              {/* Text Section */}
              <div className="w-full min-h-[21.4375rem] flex flex-col">
                <div className="text-[1.75rem] font-[400] tracking-[0.25rem] leading-auto text-[#D0D6F9] uppercase">
                  <p>So, you want to travel to</p>
                </div>

                <h1 className="text-[9rem] font-normal uppercase text-white leading-auto">
                  Space
                </h1>
                <p className="text-[1.125rem] leading-[1.8] font-normal text-[#D0D6F9]">
                  Let’s face it; if you want to go to space, you might as well
                  genuinely go to outer space and not hover kind of on the edge
                  of it. Well sit back, and relax because we’ll give you a truly
                  out of this world experience!
                </p>
              </div>
              {/* Explore Section */}
              <div className="w-full flex justify-end items-center">
                <div className="w-[17rem] h-[17rem] rounded-full bg-white text-[2rem] text-black flex justify-center items-center hover:scale-110 hover:shadow-[0_0_0_40px_rgba(255,255,255,0.1)] hover:transition-all hover:ease-in-out hover:duration-300 cursor-pointer">
                  <NavLink to="/destination" className="font-light">
                    EXPLORE
                  </NavLink>
                </div>
              </div>
            </div>
          </section>
        </article>
      </section>
      {/* Background Section */}
      <picture>
        <source media="(max-width: 600px)" srcSet={BackgroundMobile} />
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
