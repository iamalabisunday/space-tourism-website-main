import { Children } from "react";

export default function SpaceStyle({ name, distance, time, children }) {
  return (
    <div className="lg:w-[27.8125rem] flex flex-col gap-[1.5rem]">
      <h1 className="font-bellefair uppercase text-[6rem]">{name}</h1>

      <p className="text-secondaryBlue lg:text-[1.125rem] leading-[2.025rem]">
        {children}
      </p>

      <hr className="border-[0.0625rem] border-white opacity-[0.25] w-full" />

      <div className="flex gap-[1.5rem]">
        <DistanceTime AVGdistance="Avg. Distance" period={distance} />
        <DistanceTime AVGdistance="Est. travel time" period={time} />
      </div>
    </div>
  );
}

// Distance Time section
function DistanceTime({ AVGdistance, period }) {
  return (
    <div className="w-full flex flex-col font-barlowCondensed font-[200] uppercase">
      <p className="tracking-[0.125rem]">{AVGdistance}</p>
      <p className="font-bellefair lg:text-[1.75rem]">{period}</p>
    </div>
  );
}
