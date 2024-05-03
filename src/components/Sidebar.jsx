import Lottie from "react-lottie";
import developeranimation from "../assets/animations/developer.json";
import { FaUserGraduate } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaMobile } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";

const ListMenu = () => {
  return (
    <ul className="text-white font-bont flex flex-col justify-around max-sm:text-xs sm:text-sm md:text-base lg:text-2xl md:mx-5 h-full">
      <li className="flex items-center gap-x-5">
        <FaAddressCard /> <a href="#biografia">Biografia</a>
      </li>
      <li className="flex items-center gap-x-5">
        <FaUserGraduate />
        <a href="#educacionyexperiencia">Educación y Experiencia</a>
      </li>
      <li className="flex items-center gap-x-5">
        <FaCode /> <a href="#tecnologias">Tecnologías</a>
      </li>
      <li className="flex items-center gap-x-5">
        <TbWorld /> <a href="#proyectosweb">Proyectos Web</a>
      </li>
      <li className="flex items-center gap-x-5">
        <FaMobile /> <a href="#proyectosmoviles">Proyectos Móviles</a>
      </li>
      <li className="flex items-center gap-x-5">
        <FaStar /> <a href="#educatronicapp">Educatronicapp</a>
      </li>
      <li className="flex items-center gap-x-5">
        <GiDiploma />
        <a href="#reconocimientos"> Reconocimientos</a>
      </li>
    </ul>
  );
};

const LottieView = () => {
  return <Lottie options={lottieAnimation} />;
};

const lottieAnimation = {
  loop: true,
  autoplay: true,
  animationData: developeranimation,
};

function Sidebar() {
  return (
    <>
      <div className="grid grid-rows-[70%,30%] h-full ">
        <div className="flex items-center">
          <ListMenu></ListMenu>
        </div>
        <div className="">
          <LottieView></LottieView>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
