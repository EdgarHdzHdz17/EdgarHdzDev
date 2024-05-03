import Congress from "../../assets/certifications/Congress.png";
import Bootstrap from "../../assets/certifications/Boostrap.png";
import Fundaments from "../../assets/certifications/Fundaments.png";
import { Button } from "flowbite-react";
import { FaGithub } from "react-icons/fa";

function Certification(props) {
  return (
    <div className="grid grid-cols-[40%,60%] max-sm:grid-cols-1 ">
      <div className="w-[80%]  bg-blue-400 mx-auto">
        <img src={props.image}></img>
      </div>
      <div className=" text-white p-5  ">
        <div className="">
          <h1 className="font-bold text-xl">{props.title}</h1>
          <p className="mt-5 text-justify">{props.description}</p>
          <h1 className="mt-5 max-sm:text-center">{props.type}</h1>
          <h1 className="mt-5 max-sm:text-center">
            {props.company} {props.year}
          </h1>
          <div className="flex justify-center max-sm:mt-5">
            <a href={props.url}>
              <Button color="dark">
                GitHub<FaGithub className="ml-2"></FaGithub>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CoursesComponent() {
  return (
    <>
      <div className="grid grid-rows space-y-5 my-5">
        <Certification
          title={"Congreso Interdiciplinario 2023"}
          image={Congress}
          description={
            "Certificado de mi participación en el primer congreso interdisciplinario ICAT 2023, exponiendo el tema “Robótica Educativa Móvil para la Inclusión Digital” recibido por mi proyecto Educatronicapp."
          }
          type="Reconocimiento"
          company="UNAM - ICAT"
          year="2023"
          url="https://github.com/EdgarHdzHdz17/Interdisciplinary-Congress.git"
        ></Certification>
        <Certification
          title={"Diseñando paginas con Boostrap"}
          image={Bootstrap}
          description={
            "Certificado obtenido por finalizar el curso Diseñando paginas con Boostrap emitido por la Universidad Austral en Coursera."
          }
          type="Curso"
          company="Coursera - Universidad Austral"
          year="2022"
          url="https://github.com/EdgarHdzHdz17/Full-Stack-Web-Development"
        ></Certification>
        <Certification
          title={"Fundamentos de programacion con JavaScript, HTML y CSS"}
          image={Fundaments}
          description={
            "Certificado obtenido por finalizar el curso Fundamentos de programacion con JavaScript, HTML y CSS emitido por la Universidad Duke en Coursera."
          }
          type="Curso"
          company="Coursera - Universidad Duke"
          year="2022"
          url="https://github.com/EdgarHdzHdz17/Java-Programming-and-Software-Engineering-Fundamentals"
        ></Certification>
      </div>
    </>
  );
}

export default CoursesComponent;
