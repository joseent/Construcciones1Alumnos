// @ts-check
import React from "react";
// @ts-ignore
import metodologia1 from "../../images/metodologia1.jpg";
// @ts-ignore
import metodologia2 from "../../images/metodologia2.jpg";
// @ts-ignore
import metodologia5 from "../../images/metodologia5.jpg";
// @ts-ignore
import metodologia3 from "../../images/metodologia3.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
export default function Metodologia() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-10/12 text-center my-16">
        <h4 className="font-bold" >METODOLOGIA DE DICTADO</h4>
        <br />
        <img src={metodologia1} />
        <p>
          La Clase Invertida (Fllip Classroom), implica involucrar a los
          estudiantes con materiales en línea o en otros formatos que los
          alumnos utilizan para prepararse para el aprendizaje activo en el aula
          física. Las actividades de clase (aula física) fomenta el aprendizaje
          entre compañeros y en pequeños grupos que involucra a los estudiantes
          en la apropiación de los contenidos, la discusión, la compresión y
          resolución de problemas.
        </p>
        <br />
        <img src={metodologia2} />
        <br />
        <p>
          Todo esto se puede justificar porque, según los especialistas, el
          estudiante promedio retiene:
        </p>
        <p>10 % de lo que ve.</p>
        <p>20 % de lo que oye.</p>
        <p>50 % de lo que ve y oye.</p>
        <p>
          80 % de lo que ve, oye y hace (educación Semipresencial con asistencia
          tecnológica).
        </p>
        <br />
        <img src={metodologia5} />
        <br />
        <p>
          A los fines de implementar la metodología propuesta, consideramos
          fundamental priorizar el trabajo participativo en “TALLER”, ámbito
          apropiado en donde no sólo se aplican sino también se imparten
          conocimientos teóricos y en el que docentes y alumnos buscan
          conjuntamente la solución de problemas concretos.
        </p>
        <br />
        <img src={metodologia3} />
        <br />
        <p>
          El modelo es eficaz y eficiente, fomenta la participación y la
          interacción entre los alumnos. Los beneficios de esta metodología son
          muchos: se aprovecha mejor el tiempo del aula, facilita la labor del
          docente, el alumno se interesa más en clase, se evita repetir los
          contenidos teóricos, contribuye al desarrollo de la creatividad,
          actividad mental y valores del alumno.
        </p>
      </div>
    </div>
  );
}
