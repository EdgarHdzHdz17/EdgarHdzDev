import { Accordion } from "flowbite-react";
import { Carousel } from "keep-react";
import Home from "../../assets/educatronicapp/Home.png";
import Simulations from "../../assets/educatronicapp/Simulations.png";
import Coding from "../../assets/educatronicapp/Coding.png";

const AccordionDescription = () => {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title className="bg-transparent text-white hover:bg-neutral-700 ">
          ¿Qué es Educatronicapp?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-white text-justify">
            Es una aplicación móvil multiplataforma (Android e IOS) desarrollada
            en Expo React Native, su objetivo es introducir a sus usuarios en
            los conceptos básicos de programación utilizando un lenguaje natural
            definido.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="bg-transparent text-white hover:bg-neutral-700 ">
          ¿Como surge Educatronicapp?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-white text-justify">
            Esta aplicación móvil forma parte del proyecto “Laboratorio
            Educatrónica” liderado por el Dr. Enrique Ruiz Velasco Sánchez, la
            Dra. Josefina Bárcenas López y M.C. Víctor Hugo García Ortega;
            proyecto en el que se mezclan diferentes aspectos educativos como
            programación, electrónica y robótica pedagógica, por lo que la
            aplicación “Educatrónicapp” cuenta con comunicación mediante tonos
            DTMF para interactuar con una interfaz electrónica y un robot
            pedagógico "ascensor". Fue mi proyecto de titulación para obtención
            de grado.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="bg-transparent text-white hover:bg-neutral-700 ">
          ¿Qué es lo más relevante en la aplicacion?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-white text-justify">
            “Educatrónicapp” tiene la premisa de estar orientada a la
            inclusividad para ser utilizada por usuarios con algún tipo de
            discapacidad motriz, es por ello que se incluyen tecnologías de
            inteligencia artificial como el reconocimiento de voz mediante una
            API REST llamada “Speech to Text” perteneciente a Open AI.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

const Carrusel = () => {
  return (
    <Carousel slideInterval={5000} showControls={true} indicators={true}>
      <img src={Home} alt="slider-1" />
      <img src={Simulations} alt="slider-2" />
      <img src={Coding} alt="slider-3" />
    </Carousel>
  );
};

function EducatronicappComponent() {
  return (
    <div className="grid max-sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[50%,50%] my-5">
      <div className="">
        <AccordionDescription></AccordionDescription>
      </div>
      <div className=" p-2">
        <Carrusel></Carrusel>
      </div>
    </div>
  );
}

export default EducatronicappComponent;
