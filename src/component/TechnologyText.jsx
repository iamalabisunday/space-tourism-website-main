import { Children } from "react";

export default function TechnologyText({ title, name, children }) {
  return (
    <div className="md:mx-auto font-bellefair font-[300] text-center lg:text-start">
      <p className="md:text-[1.5rem] uppercase text-[1.125rem] opacity-[0.5]">
        {title}
      </p>
      <h1 className="lg:clam(3.5rem, 4vw + 1rem, 2.5rem) md:text-[2.5rem] uppercase text-[1.5rem]">
        {name}
      </h1>
      <div className="md:max-w-[32rem] max-w-[100%] font-barlow lg:text-[1.125rem] lg:leading-[2.025rem] leading-[1.6875rem] text-[1rem] md:text-[1rem] mt-[0.25rem] lg:mt-[0rem] text-secondaryBlue px-[1rem]">
        {children}
      </div>
    </div>
  );
}
