//@ts-check
import React from "react";
import "../pages/Home.css";
import NavBar from "../components/general/navBar/NavBar.jsx";
import c1Cronograma from "../images/c1cronograma.png";

import teacher1 from "../images/teachers/toppa.jpg";
import teacher2 from "../images/teachers/sosa.jpg";
import teacher3 from "../images/teachers/latina.jpg";
import teacher4 from "../images/teachers/alderete.jpg";
import teacher5 from "../images/teachers/arias.jpg";
import teacher6 from "../images/teachers/ferreyra.jpg";
import teacher7 from "../images/teachers/legorburu.jpg";
import teacher8 from "../images/teachers/saez.jpg";

export default function Home() {
  return (
    <div className="bgColor">
      <NavBar />
      <div className="w-full flex flex-col items-center ">
        {/* teachers info */}
        <div className="w-4/5 flex justify-center">
          <div className="w-full my-20 text-yellow-600 text-center">
            <h4>COMISIONES</h4>
            <div className="flex justify-between">
              {/* COMISION1*/}
              <div className="flex flex-col items-center">
                <span className="text-center text-yellow-600 mt-1">C 1</span>
                <img src={teacher3} alt="" className="rounded-full w-20 " />
                <span className="text-center text-yellow-600 mt-1">Arq.</span>
                <span className="text-center text-yellow-600 mt-1">
                  STELLA LATINA
                </span>
              </div>
              {/* C2 */}
              <div className="flex flex-col items-center">
                <span className="text-center text-yellow-600 mt-1">C 2</span>
                <img src={teacher4} alt="" className="rounded-full w-20 " />
                <span className="text-center text-yellow-600 mt-1">Ing.</span>
                <span className="text-center text-yellow-600 mt-1">
                  CARLOS ALDERETE
                </span>
              </div>

              {/* C3 */}
              <div className="flex flex-col items-center">
                <span className="text-center text-yellow-600 mt-1">C 3</span>
                <img src={teacher2} alt="" className="rounded-full w-20 " />
                <span className="text-center text-yellow-600 mt-1">
                  MSc. Arq.
                </span>
                <span className="text-center text-yellow-600 mt-1">
                  MIRTA. E. SOSA
                </span>
              </div>
              {/* C4*/}
              <div className="flex flex-col items-center">
                <span className="text-center text-yellow-600 mt-1">C 4</span>
                <img src={teacher5} alt="" className="rounded-full w-20 " />
                <span className="text-center text-yellow-600 mt-1">Ing.</span>
                <span className="text-center text-yellow-600 mt-1">
                  ELIZABETH ARIAS
                </span>
              </div>
              {/* C5 */}
              <div className="flex flex-col items-center">
                <span className="text-center text-yellow-600 mt-1">C 5</span>
                <img src={teacher6} alt="" className="rounded-full w-20 " />
                <span className="text-center text-yellow-600 mt-1">Arq.</span>
                <span className="text-center text-yellow-600 mt-1">
                  IRENE FERREYRA
                </span>
              </div>
              {/* C6 */}
              <div className="flex flex-col items-center">
                <span className="text-center text-yellow-600 mt-1">C 6</span>
                <img src={teacher7} alt="" className="rounded-full w-20 " />
                <span className="text-center text-yellow-600 mt-1">Arq.</span>
                <span className="text-center text-yellow-600 mt-1">
                  MARIANA LEGORBURU
                </span>
              </div>
              {/* C7 */}
              <div className="flex flex-col items-center">
                <span className="text-center text-yellow-600 mt-1">C 7</span>
                <img src={teacher8} alt="" className="rounded-full w-20 " />
                <span className="text-center text-yellow-600 mt-1">Arq.</span>
                <span className="text-center text-yellow-600 mt-1">
                  VANESA SAEZ
                </span>
              </div>
              {/* C8 */}
              <div className="flex flex-col items-center">
                <span className="text-center text-yellow-600 mt-1">C 8</span>
                <img src={teacher1} alt="" className="rounded-full w-20 " />
                <span className="text-center text-yellow-600 mt-1">
                  otro docente
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/5 text-yellow-600">
          <h4>ESTAMOS EN HOME</h4>
          <p>
            2da ENTREGA de TP VIDEOS individuales: 5 de Mayo de 2020. EJECUCION
            DEL VIDEO: Para la ejecución del tema del video se anexaron las
            guías para cada tema difundidas anteriormente. Buscar su número de
            video y consultar en el link: https://drive.google.com/open… NO
            cambiar el tema asignado ya que el video será "Rechazado" porque
            cada alumno tiene un tema específico a desarrollar. Esto es chequedo
            por los docentes de cada comisión. RECORDAR: ***Enviar con un peso
            máximo de 90 MB (verificar la calidad del video). Si supera esto el
            video será devuelto . Enviar con una cuenta gmail para evitar
            problemas en el envío. -Enviar en formatos normales para poder
            visualizar los videos como el AVI o MP4, ya que si no se puede abrir
            el Video para ver su contenido se devolverá para que lo conviertan y
            entreguen en la fecha asignada. Por lo tanto hay que enviarlo con
            anterioridad a la hora de cierre. -Enviar al comienzo del video los
            datos precisos para poder identificar el autor y el tema:
            -CONSTRUCCIONES 1 -FAU-UNT. 2020. -N° de alumno -Nombre y Apellido
            -Tema general -Tema especifico FECHA DE ENTREGA: Los videos se
            entregan en la fecha asignada a cada alumno. Entregan MARTES 5 de
            MAYO, hasta las 12hs (AM). Los alumnos tienen asignada la entrega
            del TP Videos Individuales según el Cronograma de entregas en el
            link. https://drive.google.com/open… ***El horario de cierre a las
            12hs (AM), se respetará y no se recibirán los videos pasado ese
            horario. Tener en cuenta para evitar inconvenientes que puedan
            surgir en el envío. NO dejar para realizar el envío para los últimos
            minutos. A esa hora, 12 del medio día, se cierra la recepción de los
            TP y los docentes realizan las planillas de los alumnos que
            entregaron el TP video. Se considerará NO entregado el TP si no se
            entrega en la fecha hasta la hora indicada. NO se podrán entregar en
            otras fechas.
          </p>
          <br />
          <br />
          <img src={c1Cronograma} alt="" />
        </div>
      </div>
    </div>
  );
}
