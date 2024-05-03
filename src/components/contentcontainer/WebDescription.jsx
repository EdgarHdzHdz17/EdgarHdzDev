import Lottie from "react-lottie";
import WebDeveloper from "../../assets/animations/webdeveloper.json";

const LottieView = () => {
  return <Lottie options={lottieAnimation} />;
};

const lottieAnimation = {
  loop: true,
  autoplay: true,
  animationData: WebDeveloper,
};

function WebDescriptionComponent() {
  return (
    <>
      <div className="grid max-sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[60%,40%] my-5">
        <div className=" text-white p-2 flex justify-center items-center text-justify">
          <p>
            Durante mi aprendizaje y experiencia he creado varios sitios web con
            el uso de herramientas como Boostrap, React y Tailwind que me han
            permitido aplicar conceptos básicos como componentes, estados y
            propiedades, mientras me permite practicar en el diseño, la
            estructura de las interfaces de usuario y sistemas responsivos.
            Además de practicar el consumo de API REST.
          </p>
        </div>
        <div className="flex justify-center items-center ">
          <div className=" w-[50%]">
            <LottieView></LottieView>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebDescriptionComponent;
