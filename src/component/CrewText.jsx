import { Children } from "react";

export default function CrewText({ title, name, children }) {
  return (
    <div className="lg:w-full md:w-[70%] md:mx-auto font-bellefair font-[300] text-center lg:text-start">
      <p className="lg:text-[2rem] md:text-[1.5rem] uppercase text-[1.125rem] opacity-[0.5]">
        {title}
      </p>
      <h1 className="lg:text-[3.5rem] md:text-[2.5rem] uppercase text-[1.5rem]">
        {name}
      </h1>
      <p className="font-barlow lg:text-[1.125rem] lg:leading-[2.025rem] leading-[1.6875rem] text-[0.9375rem] md:text-[1rem] mt-[0.25rem] lg:mt-[0rem] text-secondaryBlue">
        {children}
      </p>
    </div>
  );
}

//
