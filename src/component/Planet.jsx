import { NavLink, Outlet, useLocation } from "react-router-dom";
import MoonImg from "/destination/image-moon.png";
import MarsImg from "/destination/image-mars.png";
import EuropaImg from "/destination/image-europa.png";
import TitanImg from "/destination/image-titan.png";

export default function Planet() {
  const location = useLocation();

  // Map routes to Images
  const planetImages = {
    "/destination/moon": MoonImg,
    "/destination/mars": MarsImg,
    "/destination/europa": EuropaImg,
    "/destination/titan": TitanImg,
  };

  const currentImage = planetImages[location.pathname] || MoonImg;

  return (
    <div className="lg:min-w-[69.4rem] lg:max-h-[40rem] flex lg:flex-row flex-col lg:justify-start items-center lg:gap-[1.5rem] lg:py-[3.5rem] lg:px-[0rem] px-[1.5rem]">
      <section className="lg:min-w-[33.7rem] lg:max-h-[45.9rem] md:w-[28rem] md:h-[28rem] w-[20.4375rem] h-[13rem] flex justify-center items-center">
        <div className="lg:w-[30rem] lg:h-[30rem] md:w-[18.75rem] w-[9.375rem] flex justify-center items-center">
          <img src={currentImage} alt="Planet Image" />
        </div>
      </section>

      <section className="lg:min-w-[33.7rem] flex justify-center items-center">
        <div>
          {/* ---------------------NavLink Section--------------------------------- */}
          <nav className="font-barlowCondensed md:text-[1rem] text-[0.875rem]">
            <ul className="w-full text-secondaryBlue flex lg:justify-start justify-center align-center gap-[1.5rem] uppercase tracking-[0.125rem]">
              <li>
                <NavLink to="/destination/moon">
                  <div className="planetState pb-2 font-400 hover:border-b-1 hover:border-[#ffffff7a]">
                    <p>Moon</p>
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink to="/destination/mars">
                  <div className="planetState pb-2 font-400 hover:border-b-1 hover:border-[#ffffff7a]">
                    <p>Mars</p>
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink to="/destination/europa">
                  <div className="planetState pb-2 font-400 hover:border-b-1 hover:border-[#ffffff7a]">
                    <p>Europa</p>
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink to="/destination/titan">
                  <div className="planetState pb-2 font-400 hover:border-b-1 hover:border-[#ffffff7a]">
                    <p>Titan</p>
                  </div>
                </NavLink>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      </section>
    </div>
  );
}
