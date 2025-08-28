import Moon from "/destination/image-moon.png";
// import Mars from "destination/image-mars.png";
// import Europa from "destination/image-europa.png";
// import Titan from "destination/image-titan.png";

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
            <div className="w-full text-secondaryBlue flex justify-start align-center gap-[2rem] uppercase tracking-[0.125rem]">
              <div className="pb-2 border-b-2  font-400">
                <p>Moon</p>
              </div>
              <div className="pb-2 border-b-2  font-400">
                <p>Mars</p>
              </div>
              <div className="pb-2 border-b-2  font-400">
                <p>Europa</p>
              </div>
              <div className="pb-2 border-b-2  font-400">
                <p>Titan</p>
              </div>
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
            <DistanceTime />
            <DistanceTime />
          </div>
        </div>
      </section>
    </div>
  );
}

function DistanceTime() {
  return (
    <div className="w-full flex flex-col font-barlowCondensed font-[200] uppercase">
      <p className="tracking-[0.125rem]">AVG. DISTANCE</p>
      <p className="font-bellefair lg:text-[1.75rem]">384,400 km</p>
    </div>
  );
}

// <div className="w-full bg-blue-900">
//               <p>EST. TRAVEL TIME</p>
//               <p>3 days</p>
//             </div>
