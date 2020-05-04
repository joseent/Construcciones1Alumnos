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
        <h1 className="text-yellow-600 font-bold text-center p-4">
          INSCRIBIRSE POR COMISIONES
        </h1>
        <InscriptionToComition />
        <h1 className="text-yellow-600 font-bold text-center p-4">
          Lista de inscriptos
        </h1>
        <InscriptionList />
      </div>
    </div>
  );
}
