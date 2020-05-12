//@ts-check
import React from "react";
import NavBar from "../../components/general/navBar/NavBar";
import InscriptionList from "../../components/inscriptions/InscriptionList";
import InscriptionToComition from "../../components/inscriptions/InscriptionToComition";

export default function Inscriptions() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center">
        <h4 className="textyellow font-bold text-center p-4">
          INSCRIBIRSE POR COMISIONES
        </h4>
        <InscriptionToComition />
        <h4 className="textyellow font-bold text-center p-4">
          Lista de inscriptos
        </h4>
        <InscriptionList />
      </div>
    </div>
  );
}
