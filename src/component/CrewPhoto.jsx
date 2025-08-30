import { useLocation } from "react-router-dom";
import CommanderImg from "/crew/image-douglas-hurley.png";
import MissionImg from "/crew/image-mark-shuttleworth.png";
import PilotImg from "/crew/image-victor-glover.png";
import EngineerImg from "/crew/image-anousheh-ansari.png";

export default function CrewPhoto() {
  const location = useLocation();

  const photolocation = {
    "/crew/commander": CommanderImg,
    "/crew/mission": MissionImg,
    "/crew/pilot": PilotImg,
    "/crew/engineer": EngineerImg,
  };

  const currentphoto = photolocation[location.pathname] || CommanderImg;

  return (
    <section className="lg:min-w-[33.7rem] lg:max-h-[45.9rem] md:min-h-[35rem] flex justify-center items-center mt-[1.5rem] md:mt-[2rem] lg:mt-[0rem]">
      <img
        src={currentphoto}
        alt="Douglas Hurley"
        className="lg:w-[75%] md:w-full w-[85%]"
      />
    </section>
  );
}
