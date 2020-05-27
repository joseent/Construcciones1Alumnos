import React from "react";
import "./BottomBar.css";
import untLogo from "../../../images/logo-universidad-nacional-de-tucuman.png";
import fauUntLogo from "../../../images/fau-unt.png";
import { Link } from "react-router-dom";

export default function BottomBar() {
  return (
    <footer className="bgColor text-center font-bold p-1 pBottom w-full flex justify-around mt-6">
      <div className="w-10/12 flex flex-col">
        <div className="mediacolbottombar flex">
          <div className="mediacolfastlinks flex flex-col w-4/12 text-left py-4">
            <h5>LINK RAPIDOS</h5>
            <Link to="/fau">
              <p>Info FAU</p>
            </Link>
            <Link to="/catedra">
              <p>Info Catedra</p>
            </Link>
            <Link to="/metodologia">
              <p>Metodologia</p>
            </Link>
            <Link to="/seminars">
              <p>Seminarios</p>
            </Link>
            <Link to="/publicity">
              <p>Publicidad</p>
            </Link>
          </div>

          <div className="mediacolfastlinks flex flex-col justify-center w-4/12 py-4">
            <h5>CONTACTANOS</h5>
            <a href="https://www.facebook.com/Construcciones-Uno-Fau-Unt-455294904841225/">
              <i
                className="fa fa-facebook-square textyellow "
                aria-hidden="true"
              ></i>
              <p>CONSTRUCCIONES UNO FAU UNT</p>
            </a>
            <i className="fa fa-envelope textyellow" aria-hidden="true"></i>
              <p className="text-center">construccionesunofauunt@gmail.com</p>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-10">
            <img src={fauUntLogo} alt="" />
          </div>
          <div className="flex flex-col">
            <p className="textcoloruniversity">
              FACULTAD DE ARQUITECTURA Y URBANISMO
            </p>
            <p className="textcoloruniversity">
              UNIVERSIDAD NACIONAL DE TUCUMAN
            </p>
            <p className="text-xs mb-4">CONSTRUCCIONES 1 FAU-UNT ®</p>
          </div>
          <div className="w-10">
            <img src={untLogo} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
