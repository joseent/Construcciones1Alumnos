import React from "react";
import "./BottomBar.css";
import untLogo from "../../../images/logo-universidad-nacional-de-tucuman.png";
import fauUntLogo from "../../../images/fau-unt.png";

export default function BottomBar() {
  return (
    <footer className="bg-black text-center font-bold text-yellow-600 p-1 pBottom w-full flex justify-around mt-6">
      <div className="w-10">
        <img  src={fauUntLogo} alt="" />
      </div>
      <div className="flex flex-col">
        <span>FACULTAD DE ARQUITECTURA Y URBANISMO</span>
        <span className="mb-4">UNIVERSIDAD NACIONAL DE TUCUMAN</span>
      </div>
      <div className="w-10">
        <img src={untLogo} alt="" />
      </div>
    </footer>
  );
}
