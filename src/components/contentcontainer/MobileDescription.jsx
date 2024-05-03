import Lottie from "react-lottie";
import MobileDeveloper from "../../assets/animations/mobiledeveloper.json";

const LottieView = () => {
  return <Lottie options={lottieAnimation} />;
};

const lottieAnimation = {
  loop: true,
  autoplay: true,
  animationData: MobileDeveloper,
};

function MobileDescriptionComponent() {
  return (
    <>
      <div className="grid max-sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[40%,60%] my-5 ">
        <div className="flex justify-center items-center ">
          <div className="w-[50%]">
            <LottieView></LottieView>
          </div>
        </div>
        <div className=" text-white p-2 flex justify-center items-center text-justify">
          <p>
            Tambien cuento con experiencia en desarrollo móvil con React Native.
            Estos proyectos me han permitido aplicar conceptos básicos como
            componentes, navegación y manejo de estado, mientras trabajo en la
            creación de interfaces de usuario interactivas y funcionales. En
            estas aplicaciones, he experimentado con diferentes componentes y
            funcionalidades, como listas, formularios, navegación entre
            pantallas y la integración de APIs externas.
          </p>
        </div>
      </div>
    </>
  );
}

export default MobileDescriptionComponent;
