import BiografyComponent from "./contentcontainer/Biografy";
import TimelineComponent from "./contentcontainer/Timeline";
import TecnologysComponent from "./contentcontainer/Technologies";
import WebDescriptionComponent from "./contentcontainer/WebDescription";
import ProjectsWebComponent from "./contentcontainer/ProjectsWeb";
import MobileDescriptionComponent from "./contentcontainer/MobileDescription";
import ProjectsMobileComponent from "./contentcontainer/ProjectMobile";
import EducatronicappComponent from "./contentcontainer/Educatronicapp";
import CoursesComponent from "./contentcontainer/Courses";

function Content() {
  return (
    <div className="w-[90%] my-5">
      {/**Biografia */}
      <div className=" " id="biografia">
        <BiografyComponent></BiografyComponent>
      </div>

      {/**Educacion y Experiencia */}
      <div className="" id="educacionyexperiencia">
        <h1 className="text-white max-sm:text-2xl lg:text-3xl my-5 border-gray-500 border-b-4">
          Educación y Experiencia
        </h1>
        <TimelineComponent></TimelineComponent>
      </div>
      {/**Tecnologias */}
      <div className="" id="tecnologias">
        <h1 className="text-white max-sm:text-2xl lg:text-3xl my-5 border-gray-500 border-b-4">
          Tecnologías
        </h1>
        <TecnologysComponent></TecnologysComponent>
      </div>
      {/**Proyectos Web*/}
      <div className="" id="proyectosweb">
        <h1 className="text-white max-sm:text-2xl lg:text-3xl my-5 border-gray-500 border-b-4">
          Proyectos Web
        </h1>
        <WebDescriptionComponent></WebDescriptionComponent>
        <ProjectsWebComponent></ProjectsWebComponent>
      </div>
      {/**Proyectos Movil */}
      <div className="" id="proyectosmoviles">
        <h1 className="text-white max-sm:text-2xl lg:text-3xl my-5 border-gray-500 border-b-4">
          Proyectos Móviles
        </h1>
        <MobileDescriptionComponent></MobileDescriptionComponent>
        <ProjectsMobileComponent></ProjectsMobileComponent>
      </div>
      {/**Educatronicapp */}
      <div className="" id="educatronicapp">
        <h1 className="text-white max-sm:text-2xl lg:text-3xl my-5 border-gray-500 border-b-4">
          Educatronicapp
        </h1>
        <EducatronicappComponent></EducatronicappComponent>
      </div>
      {/**Cursos y Reconocimientos */}
      <div className="" id="reconocimientos">
        <h1 className="text-white max-sm:text-2xl lg:text-3xl my-5 border-gray-500 border-b-4">
          Cursos y Reconocimientos
        </h1>
        <CoursesComponent></CoursesComponent>
      </div>
    </div>
  );
}

export default Content;
