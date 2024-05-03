import { Timeline } from "keep-react";

const TimelineEducation = () => {
  return (
    <Timeline className=" text-white p-5 ">
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time className="text-blue-400">
            [Agosto/2016] - [Agosto/2021]
          </Timeline.Time>
          <Timeline.Title className="text-white">
            Universidad Nacional Autónoma de México
          </Timeline.Title>
          <Timeline.Body className="text-white text-justify">
            Estudié la carrera de Ingeniería en Computación en la Universidad
            Nacional Autónoma de México.
            <br></br>
            <br></br>
            Obtención de grado Diciembre 2023
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time className="text-green-400">
            [Agosto/2021] - [Diciembre/2021]
          </Timeline.Time>
          <Timeline.Title className="text-white">
            Instituto de Ingenería (UNAM)
          </Timeline.Title>
          <Timeline.Body className="text-white text-justify">
            <div>• Desarrollador Web </div>
            <div className="my-5">
              Colaboré en la creación de sitios web utilizando HTML, CSS y
              JavaScript, con un enfoque principal en el desarrollo de sistemas
              responsivos. Mi labor se centraba en garantizar que los sitios web
              ofrecieran una experiencia óptima en una variedad de dispositivos
              y tamaños de pantalla, asegurando así su accesibilidad y
              usabilidad.
            </div>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time className="text-red-400">
            [Febrero/2022] - [Diciembre/2022]
          </Timeline.Time>
          <Timeline.Title className="text-white">
            Instituto de Ciencias Aplicadas y Tecnología (ICAT) - UNAM
          </Timeline.Title>
          <Timeline.Body className="text-white text-justify">
            • Desarrollador Web <br></br> • Servicio Social - Becario <br></br>{" "}
            • Líder de proyecto <br></br> <br></br> Lideré el diseño y
            desarrollo del sitios web para 'Telemática para la Educación'
            utilizando Bootstrap4. Mi responsabilidad principal incluía la
            maquetación del sitio, la implementación de funcionalidades
            interactivas y la creación del sistema responsivo para diversos
            dispositivos.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time className="text-orange-400">
            [Enero/2023] - [Diciembre/2023]
          </Timeline.Time>
          <Timeline.Title className="text-white">
            Instituto de Ciencias Aplicadas y Tecnología (ICAT) - UNAM
          </Timeline.Title>
          <Timeline.Body className="text-white text-justify">
            • Desarrollador Móvil <br></br> • Tesista <br></br> <br></br>{" "}
            Desarrolle una aplicación movil educativa e inclusiva en REACT
            NATIVE para sistemas IOS/Android de nombre “Educatronicapp” como
            proyecto de titulación. El proyecto participo a ser nominado como
            mejor proyecto 2023 “ROBOTICA EDUCATIVA MÓVIL PARA LA INCLUSIÓN
            DIGITAL”.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};

function TimelineComponent() {
  return (
    <div className="">
      <TimelineEducation></TimelineEducation>
    </div>
  );
}

export default TimelineComponent;
