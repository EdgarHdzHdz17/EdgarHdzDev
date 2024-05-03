import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import Funkop from "../../assets/projects/web/Funkop.png";
import LandingPage from "../../assets/projects/web/Landing-Page.png";
import LoginPage from "../../assets/projects/web/Login-Page.png";
import MacbookAirM2 from "../../assets/projects/web/MacbookAirM2.png";
import Telematica from "../../assets/projects/web/Telematica.png";
import WeatherSphere from "../../assets/projects/web/WeatherSphere.png";
import Html from "../../assets/icons/html5.svg";
import Css from "../../assets/icons/css3.svg";
import Javascript from "../../assets/icons/javascript.svg";
import Bootstrap from "../../assets/icons/bootstrap.svg";
import Tailwind from "../../assets/icons/tailwindcss.svg";
import React from "../../assets/icons/react.svg";
import ViteJS from "../../assets/icons/vitejs.svg";
import { FaGithub } from "react-icons/fa";

const TagHTML = () => {
  return <img src={Html} className="w-[15%] max-sm:w-[10%]"></img>;
};

const TagCSS = () => {
  return <img src={Css} className="w-[15%] max-sm:w-[10%]"></img>;
};

const TagJS = () => {
  return (
    <img src={Javascript} className="w-[15%] max-sm:w-[10%] rounded-md"></img>
  );
};

const TagReact = () => {
  return <img src={React} className="w-[15%] max-sm:w-[10%]"></img>;
};

const TagBoostrap = () => {
  return <img src={Bootstrap} className="w-[15%] max-sm:w-[10%]"></img>;
};

const TagTailwind = () => {
  return <img src={Tailwind} className="w-[15%] max-sm:w-[10%]"></img>;
};

const TagViteJS = () => {
  return <img src={ViteJS} className="w-[15%] max-sm:w-[10%]"></img>;
};

/**CardProject Componente*/
const CardProject = (props) => {
  return (
    <Card
      className="max-w-sm bg-transparent hover:bg-neutral-700 border-transparent"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={props.image}
    >
      <h5 className="text-2xl font-bold text-white ">{props.title}</h5>
      <p className="font-normal text-white text-justify">{props.description}</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {props.tagHTML && <TagHTML></TagHTML>}
        {props.tagCSS && <TagCSS></TagCSS>}
        {props.tagJS && <TagJS></TagJS>}
        {props.tagReact && <TagReact></TagReact>}
        {props.tagViteJS && <TagViteJS></TagViteJS>}
        {props.tagBoostrap && <TagBoostrap></TagBoostrap>}
        {props.tagTailwind && <TagTailwind></TagTailwind>}
      </div>
      <div className="flex justify-center">
        <a href={props.url}>
          <Button color="dark">
            GitHub<FaGithub className="ml-2"></FaGithub>
          </Button>
        </a>
      </div>
    </Card>
  );
};

function ProjectsWebComponent() {
  return (
    <>
      {/**Proyectos Web */}
      <div className="grid my-5 max-sm:grid-cols-1 max-sm:gap-y-5 md:gap-y-5 md:gap-x-5 md:grid-cols-2 lg:grid-cols-3 ">
        {/**Telematica */}
        <div className="flex justify-center">
          <CardProject
            image={Telematica}
            title={"Telematica"}
            description={
              "Página web sobre del Laboratorio Telematica para la Educación."
            }
            tagHTML
            tagCSS
            tagJS
            tagBoostrap
            url={"https://github.com/EdgarHdzHdz17/Page-Telematica-ICAT.git"}
          ></CardProject>
        </div>
        {/**Funkop */}
        <div className="flex justify-center">
          <CardProject
            image={Funkop}
            title={"Funkop"}
            description={
              "Página web de Funkop hecha con HTML, CSS y JavaScript."
            }
            tagHTML
            tagCSS
            tagJS
            url={"https://github.com/EdgarHdzHdz17/Funkop.git"}
          ></CardProject>
        </div>
        {/**WeatherSphere */}
        <div className="flex justify-center">
          <CardProject
            image={WeatherSphere}
            title={"WeatherShere"}
            description={
              "App web para ver el estado del clima usando WeatherAPI."
            }
            tagReact
            tagViteJS
            tagTailwind
            url={"https://github.com/EdgarHdzHdz17/WeatherSphere.git"}
          ></CardProject>
        </div>
        {/**MacbookAirM2 */}
        <div className="flex justify-center">
          <CardProject
            image={MacbookAirM2}
            title={"MacBookAirM2"}
            description={
              "Página web que incluye informacíon sobre la MacBookAirM2"
            }
            tagReact
            tagViteJS
            tagTailwind
            url={"https://github.com/EdgarHdzHdz17/MacBookAirM2.git"}
          ></CardProject>
        </div>
        {/**LandingPage */}
        <div className="flex justify-center">
          <CardProject
            image={LandingPage}
            title={"LandingPage"}
            description={"Landing Page."}
            tagReact
            tagViteJS
            tagTailwind
            url={"https://github.com/EdgarHdzHdz17/Landing-Page-UI-Design.git"}
          ></CardProject>
        </div>
        {/**LoginPage */}
        <div className="flex justify-center">
          <CardProject
            image={LoginPage}
            title={"LoginPage"}
            description={"Login page."}
            tagReact
            tagTailwind
            tagViteJS
            url={"https://github.com/EdgarHdzHdz17/Login-Page-UI-Desing.git"}
          ></CardProject>
        </div>
      </div>
    </>
  );
}

export default ProjectsWebComponent;
