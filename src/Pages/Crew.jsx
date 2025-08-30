import NavBar from "../component/NavBar.jsx";
import NavBarTable from "../component/NavBarTable.jsx";
import NavBarPhone from "../component/NavBarPhone.jsx";
import DouglasPhoto from "/crew/image-douglas-hurley.png";

export default function Crew() {
  return (
    <div
      className="w-full mx-auto h-full justify-center items-center 
      lg:bg-[url(/crew/background-crew-desktop.jpg))] 
        md:bg-[url(/crew/background-crew-tablet.jpg)] 
          bg-[url(/crew/background-crew-mobile.jpg)] bg-cover bg-center bg-no-repeat"
    >
      <div className="w-full flex flex-col min-h-screen mx-auto lg:justify-start justify-start items-center">
        {/* Navigation Section */}
        <header className="w-full flex justify-between items-center">
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
        {/* Text and Explore Section */}
        <section className="w-full lg:px-[0rem] md:px-[2rem] lg:w-[69.375rem] text-white flex flex-col gap-[1.5rem] justify-center items-center md:my-[2rem]">
          {/* Heading text */}
          <div className="md:w-full w-fit flex md:justify-start justify-center lg:items-center md:gap-[1.5rem] gap-[0.8rem] md:text-[1.25rem] text-[1rem] font-barlowCondensed md:tracking-[0.1875rem] tracking-[0.15rem] font-200 ">
            <span className="text-white opacity-[0.25]">02</span>
            <p className="uppercase">Meet your Crew</p>
          </div>
          {/* -----------------------Main content Section------------------------------- */}
          <div className="lg:min-w-[69.4rem] lg:max-h-[40rem] md:h-full min-h-[43.8rem] flex lg:flex-row flex-col lg:justify-start items-center lg:gap-[1.5rem] lg:py-[3.5rem] lg:px-[0rem] px-[1.5rem] bg-green-900">
            <section className="lg:min-w-[33.7rem] flex flex-col lg:justify-center lg:items-center">
              {/* Text Content Section */}
              <div className="w-full h-full bg-red-900 lg:min-h-[38.4rem] min-h-[17.4rem] flex md:justify-center justify-start lg:items-center items-start pt-[2.5rem] lg:pt-[0rem]">
                <div className="lg:w-full md:w-[70%] font-bellefair font-[300] bg-blue-600 text-center lg:text-start">
                  <p className="lg:text-[2rem] md:text-[1.5rem] uppercase text-[1.125rem]">
                    Commander{" "}
                  </p>
                  <h1 className="lg:text-[3.5rem] md:text-[2.5rem] uppercase text-[1.5rem]">
                    Douglas Hurley
                  </h1>
                  <p className="font-barlow lg:text-[1.125rem] lg:leading-[2.025rem] leading-[1.6875rem] text-[0.9375rem] md:text-[1rem] mt-[0.25rem] lg:mt-[0rem]">
                    Douglas Gerald Hurley is an American engineer, former Marine
                    Corps pilot and former NASA astronaut. He launched into
                    space for the third time as commander of Crew Dragon Demo-2.
                  </p>
                </div>
              </div>
              {/* Navigation Section */}
              <div className="w-full bg-blue-900">
                <nav>
                  <ul className="flex lg:gap-[2.5rem] lg:justify-start justify-center items-center gap-[1rem]">
                    <li>
                      <div className="lg:w-[1rem] lg:h-[1rem] w-[0.65rem] h-[0.65rem] rounded-full bg-white"></div>
                    </li>
                    <li>
                      <div className="lg:w-[1rem] lg:h-[1rem] w-[0.65rem] h-[0.65rem] rounded-full bg-white"></div>
                    </li>
                    <li>
                      <div className="lg:w-[1rem] lg:h-[1rem] w-[0.65rem] h-[0.65rem] rounded-full bg-white"></div>
                    </li>
                    <li>
                      <div className="lg:w-[1rem] lg:h-[1rem] w-[0.65rem] h-[0.65rem] rounded-full bg-white"></div>
                    </li>
                  </ul>
                </nav>
              </div>
            </section>
            {/* Photo Section */}
            <section className="lg:min-w-[33.7rem] lg:max-h-[45.9rem] md:min-h-[35rem] flex justify-center items-center bg-yellow-900 mt-[1.5rem] md:mt-[2rem] lg:mt-[0rem]">
              <img
                src={DouglasPhoto}
                alt="Douglas Hurley"
                className="lg:w-[75%] md:w-full w-[85%]"
              />
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}
