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
    <section
      className="relative lg:min-w-[33.7rem] lg:max-h-[45.9rem] md:min-h-[35rem] flex justify-center items-center mt-[1.5rem] md:mt-[2rem] lg:mt-[0rem] bg-cover"
      style={{ backgroundImage: `url(${currentphoto})` }}
    >
      {/* Gradient only at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[10%] bg-gradient-to-t from-[#151828fa] from-[77.39%] to-[#D9D9D9]/0 to-[100%]"></div>
    </section>
  );
}
