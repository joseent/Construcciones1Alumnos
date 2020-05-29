// @ts-check
import React from "react";

// @ts-ignore
import infofau from "../images/universidadFoto.jpg";
// @ts-ignore
import areatecnica from "../images/areatecnica.jpg";

import "../pages/PublicHome.css";
import "../components/general/navBar/NavBar.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import PublicHomeSeminars from "../components/publicHome/PublicHomeSeminars";
import PublicHomePublicity from "../components/publicHome/PublicHomePublicity";
import PublicHomeClassRoomPics from "../components/publicHome/PublicHomeClassRoomPics";
import Teachers from "./publicHomeInformation/Teachers";
import { useHistory } from "react-router-dom";
import NavBarPublicHome from "../components/general/navBar/NavBarPublicHome";

export default function PublicHome() {
  const history = useHistory();

  const handleInfoFau = () => {
    history.push("/fau");
  };
  const handleInfoCatedra = () => {
    history.push("/catedra");
  };
  const handleMetodologia = () => {
    history.push("/metodologia");
  };
  return (
    <div className=" flex flex-col items-center bgColor">
      <NavBarPublicHome />

      {/* CONTENT*/}
      <div className="mediafullwidth w-11/12 flex flex-col items-center divide-y divide-yellow-600">
        {/* general info */}
        <div className="flex my-20">
          <img src={infofau} className="w-2/5 informativeimage" alt="" />
          <div className="infofaumedia w-3/5 flex flex-col justify-center items-center">
            <div className="w-4/5 text-center mt-20">
              <h4 className="text-2xl">FACULTAD</h4>
              <p>
                Desde hace más de 60 años la Facultad de Arquitectura y
                Urbanismo, de la Universidad Nacional de Tucumán, forma talentos
                comprometidos con su comunidad y con su tiempo.
              </p>
            </div>
            <button
              onClick={handleInfoFau}
              className="bgyellow  shadow-lg seemorebutton rounded-md mt-8 mb-8 w-1/5 p-2 font-bold"
            >
              VER MAS
            </button>
          </div>
        </div>
        {/* {/* catedra info */}
        <div className="mediafullwidth flex mb-20">
          <div className="infocatedramedia w-4/5 flex flex-col justify-center items-center">
            <div className="w-4/5 text-center mt-20">
              <h4 className="text-2xl">CONSTRUCCIONES I</h4>
              <p>¿QUE? ¿CON ¿QUE? ¿COMO? se construye un edificio</p>
              <br/>
              <p>
                Se pretende orientar al estudiante para que desarrolle
                CRITERIOS, teniendo en cuenta los MATERIALES y PROCESOS
                CONSTRUCTIVOS, para proponer alternativas tecnológicas adecuadas
                para resolver los diferentes elementos constructivos que
                integran el edificio.
              </p>
            </div>
            <button
              onClick={handleInfoCatedra}
              className="bgyellow  shadow-lg seemorebutton rounded-md mt-8 mb-8 w-1/5 p-2 font-bold"
            >
              VER MAS
            </button>
          </div>
          <img
            src={areatecnica}
            className="w-2/5 mt-20 informativeimage"
            alt=""
          />
        </div>
        {/* metodologia */}
        <div className="mediafullwidth flex flex-col">
          <h4 className="text-center text-2xl mt-20">METODOLOGIA</h4>
          <div className="flex w-full mediasm">
            <div className="metodologycol w-4/12 flex flex-col items-center text-center mt-10">
              <h4 className="text-2xl">PRESENCIAL</h4>
              <p>
                Los alumnos asistirán, en forma presencial, todos los días de
                clase según se prevea en el cronograma.
              </p>
              <button
                onClick={handleMetodologia}
                className="bgyellow shadow-lg seemorebutton rounded-md mt-8 mb-8 w-1/5 p-2 font-bold"
              >
                VER MAS
              </button>
            </div>
            <div className="metodologycol w-4/12 flex-col text-center mt-10">
              <h4 className="text-2xl">SEMI-PRESENCIAL</h4>
              <p>
                Los alumnos asistirán, en forma presencial, el 50% de los días
                de clase de la modalidad presencial, según se prevea el
                cronograma.
              </p>
              <button
                onClick={handleMetodologia}
                className="bgyellow shadow-lg seemorebutton rounded-md mt-8 mb-8 w-1/5 p-2 font-bold"
              >
                VER MAS
              </button>
            </div>
            <div className="metodologycol w-4/12 flex-col text-center mt-10">
              <h4 className="text-2xl">DISTANCIA</h4>
              <p>
                Los alumnos asistirán, en forma presencial, 4 días de clase
                según se prevea en el calendario.
              </p>
              <button
                onClick={handleMetodologia}
                className="bgyellow shadow-lg seemorebutton rounded-md mt-8 mb-20 w-1/5 p-2 font-bold"
              >
                VER MAS
              </button>
            </div>
          </div>
        </div>
        {/* seminars */}
        <div className="mediafullwidth w-11/12 flex justify-center">
          <PublicHomeSeminars />
        </div>
        {/* publicity */}
        <div className="mediafullwidth w-11/12 flex justify-center">
          <PublicHomePublicity />
        </div>
        {/* pictures */}
        <div className="mediafullwidth w-11/12 flex justify-center">
          <PublicHomeClassRoomPics />
        </div>
        {/* teachers */}
        <Teachers />
      </div>
      {/* <BottomBar /> */}
    </div>
  );
}
