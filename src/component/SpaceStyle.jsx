import { Children } from "react";

export default function SpaceStyle({ name, distance, time, children }) {
  return (
    <div className="w-full lg:w-[27.8125rem] max-w-[32.125rem] flex flex-col lg:jsutify-start justify-center items-center lg:items-start">
      <h1 className="font-bellefair uppercase lg:text-[6rem] md:text-[5rem] text-[3.5rem]">
        {name}
      </h1>

      <p className="md:w-full max-w-[95%] text-secondaryBlue lg:text-[1.125rem] mb-[1rem] md:mb-[1.5rem] lg:leading-[2.025rem] md:leading-[2.025rem] leading-[1.6875rem] md:text-[1rem] text-[0.9375rem] text-center lg:text-start">
        {children}
      </p>

      <hr className="border-[0.0625rem] border-white opacity-[0.25] w-full mb-[1rem] md:mb-[1.5rem]" />

      <div className="md:w-full flex md:flex-row flex-col gap-[1.5rem] md:justify-between">
        <DistanceTime AVGdistance="Avg. Distance" period={distance} />
        <DistanceTime AVGdistance="Est. travel time" period={time} />
      </div>
    </div>
  );
}

// Distance Time section
function DistanceTime({ AVGdistance, period }) {
  return (
    <div className="w-full flex flex-col lg:items-start items-center font-barlowCondensed font-[200] uppercase">
      <p className="tracking-[0.125rem] md:text-center">{AVGdistance}</p>
      <p className="font-bellefair text-[1.75rem] md:text-center">{period}</p>
    </div>
  );
}
