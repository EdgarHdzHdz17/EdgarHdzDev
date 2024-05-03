import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import Educatronicapp from "../../assets/projects/mobile/Educatronicapp.png";
import SnapNote from "../../assets/projects/mobile/SnapNote.png";
import VoiceWave from "../../assets/projects/mobile/VoiceWave-Transcribe.png";
import Quizify from "../../assets/projects/mobile/Quizify.png";
import FurryFriend from "../../assets/projects/mobile/FurryFriend.png";
import React from "../../assets/icons/react.svg";
import { FaGithub } from "react-icons/fa";

const TagReact = () => {
  return <img src={React} className="w-[15%] max-sm:w-[10%]"></img>;
};

/**CardProject*/
const CardProject = (props) => {
  return (
    <Card
      className="max-w-sm bg-transparent hover:bg-neutral-700 border-transparent"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={props.image}
    >
      <h5 className="text-2xl font-bold text-white">{props.title}</h5>
      <p className="font-normal text-white text-justify">{props.description}</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {props.tagReact && <TagReact></TagReact>}
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

function ProjectsMobileComponent() {
  return (
    <>
      {/**Primeros 3 proyectos */}
      <div className="grid my-5 max-sm:grid-cols-1 max-sm:gap-y-5 md:gap-y-5 md:gap-x-5 md:grid-cols-2 lg:grid-cols-3 ">
        {/**Educatronicapp */}
        <div className="flex justify-center">
          <CardProject
            image={Educatronicapp}
            title={"Educatronicapp"}
            description={
              "Educatronicapp es una aplicación que introduce a sus usuarios a los conocimientos básicos de la programación."
            }
            tagReact
            url={"https://github.com/EdgarHdzHdz17/Educatronicapp.git"}
          ></CardProject>
        </div>
        {/**SnapNote */}
        <div className="flex justify-center">
          <CardProject
            image={SnapNote}
            title={"SnapNote"}
            description={
              "Snap-App es una aplicación para tomar notas, desarrollada en Expo React Native."
            }
            tagReact
            url={"https://github.com/EdgarHdzHdz17/SnapNote.git"}
          ></CardProject>
        </div>
        {/**VoiceWave */}
        <div className="flex justify-center">
          <CardProject
            image={VoiceWave}
            title={"VoiceWave-Transcribe"}
            description={
              "Aplicación móvil con React Native que convierte audio a texto usando un API REST."
            }
            tagReact
            url={"https://github.com/EdgarHdzHdz17/VoiceWave-Transcribe.git"}
          ></CardProject>
        </div>
        {/**VoiceWave */}
        <div className="flex justify-center">
          <CardProject
            image={Quizify}
            title={"Quizify"}
            description={
              "Quizify es una aplicación de preguntas sobre Capitales, Tradiciones y Animales de México desarrollada en Expo React Native."
            }
            tagReact
            url={"https://github.com/EdgarHdzHdz17/Quizify.git"}
          ></CardProject>
        </div>
        {/**FurryFriend */}
        <div className="flex justify-center">
          <CardProject
            image={FurryFriend}
            title={"FurryFriend"}
            description={
              "FurryFriend es una aplicación para obtener datos sobre distintas razas de perros con un API desarrollada en Expo React Native."
            }
            tagReact
            url={"https://github.com/EdgarHdzHdz17/FurryFriend.git"}
          ></CardProject>
        </div>
      </div>
    </>
  );
}

export default ProjectsMobileComponent;
