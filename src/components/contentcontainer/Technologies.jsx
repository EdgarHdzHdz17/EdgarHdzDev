import Html from "../../assets/icons/html5.svg";
import Css from "../../assets/icons/css3.svg";
import Javascript from "../../assets/icons/javascript.svg";
import Bootstrap from "../../assets/icons/bootstrap.svg";
import Tailwind from "../../assets/icons/tailwindcss.svg";
import React from "../../assets/icons/react.svg";
import ViteJS from "../../assets/icons/vitejs.svg";
import Git from "../../assets/icons/git.svg";
import GitHub from "../../assets/icons/github.svg";
import Figma from "../../assets/icons/figma.svg";
import Notion from "../../assets/icons/notion.svg";

const TagHTML = () => {
  return <img src={Html} className="w-[15%] max-sm:w-[40%]"></img>;
};

const TagCSS = () => {
  return <img src={Css} className="w-[15%] max-sm:w-[40%]"></img>;
};

const TagJS = () => {
  return (
    <img src={Javascript} className="w-[15%] max-sm:w-[40%] rounded-md"></img>
  );
};

const TagReact = () => {
  return <img src={React} className="w-[15%] max-sm:w-[40%]"></img>;
};

const TagBoostrap = () => {
  return <img src={Bootstrap} className="w-[15%] max-sm:w-[40%]"></img>;
};

const TagTailwind = () => {
  return <img src={Tailwind} className="w-[15%] max-sm:w-[40%]"></img>;
};

const TagViteJS = () => {
  return <img src={ViteJS} className="w-[15%] max-sm:w-[40%]"></img>;
};

const TagFigma = () => {
  return <img src={Figma} className="w-[15%] max-sm:w-[40%]"></img>;
};

const TagGit = () => {
  return <img src={Git} className="w-[15%] max-sm:w-[40%]"></img>;
};

const TagGitHub = () => {
  return <img src={GitHub} className="w-[15%] max-sm:w-[40%]"></img>;
};

const TagNotion = () => {
  return <img src={Notion} className="w-[15%] max-sm:w-[40%]"></img>;
};

/**Tecnologias Componente */
const Technologies = (props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-white text-center">{props.title}</h1>
      <div className="flex flex-wrap justify-around mt-5 max-sm:flex-col items-center max-sm:space-y-10">
        {props.tagHTML && <TagHTML></TagHTML>}
        {props.tagCSS && <TagCSS></TagCSS>}
        {props.tagJS && <TagJS></TagJS>}
        {props.tagReact && <TagReact></TagReact>}
        {props.tagViteJS && <TagViteJS></TagViteJS>}
        {props.tagBoostrap && <TagBoostrap></TagBoostrap>}
        {props.tagTailwind && <TagTailwind></TagTailwind>}
        {props.tagGit && <TagGit></TagGit>}
        {props.tagGitHub && <TagGitHub></TagGitHub>}
        {props.tagFigma && <TagFigma></TagFigma>}
        {props.tagNotion && <TagNotion></TagNotion>}
      </div>
    </div>
  );
};

function TecnologysComponent() {
  return (
    <>
      <div className="grid grid-rows-2 max-sm:grid-cols-1 my-5">
        {/**Descripcion */}
        <div className="">
          <p className="text-white flex h-full text-justify items-center">
            Como desarrollador Frontend, poseo experiencia en el uso de
            tecnologías fundamentales como HTML, CSS y JavaScript. Además, estoy
            familiarizado con librerías CSS como Bootstrap y Tailwind. En mis
            proyectos, empleo también bibliotecas como React-ViteJS y React
            Native para el desarrollo de aplicaciones móviles. Poseo
            conocimientos en el uso de sistemas de control de versiones como Git
            y plataformas colaborativas como GitHub. Además, utilizo
            herramientas de diseño como Figma y de organización como Notion para
            gestionar mis proyectos de manera eficiente.
          </p>
        </div>
        {/**Tecnologias */}
        <div className="grid grid-cols-3">
          {/**Basicas */}
          <Technologies
            title={"Lenguajes y Tecnologías"}
            img1={Html}
            img2={Css}
            tagHTML
            tagCSS
            tagJS
            tagReact
          ></Technologies>
          {/**Bibliotecas */}
          <Technologies
            title={"Frameworks y Herramientas"}
            tagBoostrap
            tagTailwind
            tagViteJS
          ></Technologies>
          {/**Otras */}
          <Technologies
            title={"Gestión y Colaboración"}
            tagGit
            tagGitHub
            tagFigma
            tagNotion
          ></Technologies>
        </div>
      </div>
    </>
  );
}

export default TecnologysComponent;
