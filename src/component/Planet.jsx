import { NavLink, Outlet } from "react-router-dom";
import Moon from "/destination/image-moon.png";

export default function Planet() {
  return (
    <div className="lg:w-[1110px] lg:h-[734px] flex lg:justify-start lg:items-center lg:gap-[1.5rem] lg:py-[6%] lg:px-[3rem]">
      <section className="lg:w-[539px] lg:h-[734px] bg-gray-900 flex justify-center items-center">
        <div className="lg:w-[480px] lg:h-[480px] bg-red-900">
          <img src={Moon} alt="Moon" />
        </div>
      </section>

      <section className="lg:w-[539px] lg:h-[734px] bg-gray-900 flex justify-center items-center">
        <div className="lg:w-[27.8125rem] lg:h-[30rem] bg-red-800 flex flex-col justify-center items-center gap-[2.5rem]">
          <div className="font-barlowCondensed text-[1rem]">
            {/* ---------------------NavLink Section--------------------------------- */}
            <div>
              <nav>
                <ul className="w-full text-secondaryBlue flex justify-start align-center gap-[2rem] uppercase tracking-[0.125rem]">
                  <li>
                    <NavLink to="/destination/moon">
                      <div className="pb-2 border-b-2  font-400">
                        <p>Moon</p>
                      </div>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/destination/mars">
                      <div className="pb-2 border-b-2  font-400">
                        <p>Mars</p>
                      </div>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/destination/europa">
                      <div className="pb-2 border-b-2  font-400">
                        <p>Europa</p>
                      </div>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/destination/titan">
                      <div className="pb-2 border-b-2  font-400">
                        <p>Titan</p>
                      </div>
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            {/* ---------------------Text Section--------------------------------- */}
            <div className="flex flex-col justify-center items-center">
              {/* ---------------------Header Section--------------------------------- */}
              <div className="lg:w-full flex justify-start align-start">
                <h1 className="font-bellefair uppercase text-[6rem] font-300">
                  Moon
                </h1>
              </div>
              {/* ---------------------Body Section--------------------------------- */}
              <div className="lg:w-full text-secondaryBlue leading-[2.025rem]">
                <p className="font-barlow lg:text-[1.125rem] font-200">
                  See our planet as you’ve never seen it before. A perfect
                  relaxing trip away to help regain perspective and come back
                  refreshed. While you’re there, take in some history by
                  visiting the Luna 2 and Apollo 11 landing sites.
                </p>
              </div>
            </div>
          </div>
          {/* ---------------------Line Section--------------------------------- */}
          <hr class="border-[0.0625rem] border-while opacity-[0.25] w-full"></hr>
          {/* ---------------------Distance and Time Section--------------------------------- */}
          <div className="w-full bg-green-900 flex justify-start align-center gap-[1.5rem]">
            <DistanceTime distance="Avg. Distance" time="384,400 km" />
            <DistanceTime distance="Est. travel time" time="3 days" />
          </div>
        </div>
      </section>
    </div>
  );
}

// Distance Time section
function DistanceTime({ distance, time }) {
  return (
    <div className="w-full flex flex-col font-barlowCondensed font-[200] uppercase">
      <p className="tracking-[0.125rem]">{distance}</p>
      <p className="font-bellefair lg:text-[1.75rem]">{time}</p>
    </div>
  );
}
