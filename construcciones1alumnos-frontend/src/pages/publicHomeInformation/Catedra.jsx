// @ts-check
import React from "react";
import mapaconceptual1 from "../../images/mapaconceptual1.jpg";
import mapaconceptual2 from "../../images/mapaconceptual2.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Catedra() {
  return (
    // info catedra
    <div className="w-full flex justify-center">
      <div className="w-10/12 text-center my-16">
        <h4>CONSTRUCCIONES I</h4>
        <p>
          En el campo de nuestra competencia, integrando el área de Ciencias
          Básicas, Tecnología, Producción y Gestión, la asignatura
          “Construcciones 1” se inserta en el 2º Ciclo disciplinar
          analítico-conceptual de apropiación y profundización progresiva y
          diversificada de los contenidos básicos de la carrera.
        </p>
        <br />
        <img src={mapaconceptual1} />
        <br />
        <p>
          Mapa conceptual de la asignatura: descomposición de la obra de
          arquitectura.
        </p>
        <br />
        <p>
          DESCOMPOSICIÓN del objeto: de la identificación y análisis de la obra
          realizada (el edificio) al proyecto tecnológico (materiales, elementos
          y técnicas constructivas).
        </p>
        <br />
        <img src={mapaconceptual2} />
        <br />
        <p>
          Enfoque didáctico COMPOSICIÓN del objeto: del estudio conceptual,
          objetivo, experimental de materiales, productos y sistemas
          constructivos a la construcción (la actividad que transforma el
          proyecto en una obra) del edificio como respuesta a los requerimientos
          de habitabilidad.
        </p>
      </div>
    </div>
  );
}
