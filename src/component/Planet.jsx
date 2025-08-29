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
    <div className="lg:w-[1110px] lg:h-[734px] flex lg:justify-start lg:items-center lg:gap-[1.5rem] lg:py-[6%] lg:px-[3rem]">
      <section className="lg:w-[539px] lg:h-[734px] flex justify-center items-center">
        <div className="lg:w-[480px] lg:h-[480px]">
          <img src={currentImage} alt="Planet Image" />
        </div>
      </section>

      <section className="lg:w-[539px] lg:h-[734px] flex justify-center items-center">
        <div>
          {/* ---------------------NavLink Section--------------------------------- */}
          <nav className="font-barlowCondensed text-[1rem]">
            <ul className="w-full text-secondaryBlue flex justify-start align-center gap-[1.5rem] uppercase tracking-[0.125rem]">
              <li>
                <NavLink to="/destination/moon">
                  <div className="pb-2 font-400">
                    <p>Moon</p>
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink to="/destination/mars">
                  <div className="pb-2 font-400">
                    <p>Mars</p>
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink to="/destination/europa">
                  <div className="pb-2 font-400">
                    <p>Europa</p>
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink to="/destination/titan">
                  <div className="pb-2 font-400">
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
