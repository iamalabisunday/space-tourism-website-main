import Moon from "/destination/image-moon.png";
// import Mars from "destination/image-mars.png";
// import Europa from "destination/image-europa.png";
// import Titan from "destination/image-titan.png";

export default function Planet() {
  return (
    <div className="w-full flex lg:justify-start lg:items-center lg:gap-[1.5rem] lg:py-[6%] lg:px-[3rem]">
      <section className="w-fit">
        <img src={Moon} alt="Moon" className="w-[80%] h-[80%]" />
      </section>
      <section>
        <div>
          <h1>Moon</h1>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
        </div>
        <br />
        <div>
          <div>
            <p>AVG. DISTANCE</p>
            <p>384,400 km</p>
          </div>
          <div>
            <p>EST. TRAVEL TIME</p>
            <p>3 days</p>
          </div>
        </div>
      </section>
    </div>
  );
}
