import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BottomBar from "../components/general/bottomBar/BottomBar";
import c1Logo from "../images/c1Logo.jpg";
import bgegipt from "../images/bgegipt.jpg";

export default function PublicHome() {
  return (
      <div className="flex flex-col items-center">
      <div className="w-full bg-yellow-600 p-6">
        <p className="text-3xl text-center font-bold">CONSTRUCCIONES I</p>
        <div className="text-center">
          <span>No estas registrado?</span>
          <Link to="/register" className="font-bold tracking-tight">
            REGISTRATE AQUI!
          </Link>
        </div>
      </div>
      {/* FONDO */}
      <div className="w-full flex justify-center items-center">
        <img
          className="Bgegipt bg-local w-full relative"
          src={bgegipt}
          alt="Bgegipt"
        />
        <div className="absolute w-full p-6 flex justify-center">
          <img className="rounded-full w-3/12 mb-5" src={c1Logo} alt="" />
        </div>
      </div>
      {/* CONTENT*/}
      <div className="flex flex-col items-center divide-y divide-yellow-600">
        {/* general info */}
        <div className="w-4/5 flex justify-center">
          <div className="w-4/5 text-center text-yellow-600  my-20">
            <p>INFO FACUTLAD</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              ullam maxime, nobis et animi quis sit quia eveniet distinctio
              dignissimos? Est maiores provident aspernatur nobis eaque,
              cupiditate ex quia quos?
            </p>
          </div>
        </div>
        {/* catedra info */}
        <div className="w-4/5 flex justify-center">
          <div className="w-4/5 text-center text-yellow-600 my-20">
            <p>INFO CATEDRA</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              ullam maxime, nobis et animi quis sit quia eveniet distinctio
              dignissimos? Est maiores provident aspernatur nobis eaque,
              cupiditate ex quia quos?
            </p>
          </div>
        </div>
        {/* teachers info */}
        <div className="w-4/5 flex justify-center">
          <div className="w-full my-20">
            <p>INFO DOCENTES</p>
            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <img src={c1Logo} alt="" className="rounded-full w-20 " />
                <span className="text-center text-yellow-600 mt-1">
                  nombres
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img src={c1Logo} alt="" className="rounded-full w-20 " />
                <span className="text-center text-yellow-600 mt-1">
                  nombres
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img src={c1Logo} alt="" className="rounded-full w-20 " />
                <span className="text-center text-yellow-600 mt-1">
                  nombres
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img src={c1Logo} alt="" className="rounded-full w-20 " />
                <span className="text-center text-yellow-600 mt-1">
                  nombres
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img src={c1Logo} alt="" className="rounded-full w-20 " />
                <span className="text-center text-yellow-600 mt-1">
                  nombres
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img src={c1Logo} alt="" className="rounded-full w-20 " />
                <span className="text-center text-yellow-600 mt-1">
                  nombres
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img src={c1Logo} alt="" className="rounded-full w-20 " />
                <span className="text-center text-yellow-600 mt-1">
                  nombres
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img src={c1Logo} alt="" className="rounded-full w-20 " />
                <span className="text-center text-yellow-600 mt-1">
                  nombres
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* seminars */}
        <div className="w-4/5 flex justify-center">
          <div className="w-4/5 text-center text-yellow-600 my-20">
            <p>SEMINARIOS</p>
          </div>
        </div>
        {/* publicity */}
        <div className="w-4/5 flex justify-center">
          <div className="w-4/5 text-center text-yellow-600 my-20">
            <p>PUBLICIDAD</p>
          </div>
        </div>
        {/* pictures */}
        <div className="w-4/5 flex justify-center">
          <div className="w-4/5 text-center text-yellow-600 my-20">
            <p>CARROUSEL</p>
          </div>
        </div>
        {/* FONDO */}
        <div className="w-full flex justify-center items-center">
          <img
            className="Bgegipt bg-local w-full relative"
            src={bgegipt}
            alt="Bgegipt"
          />
        </div>
      </div>
      <BottomBar />
    </div>
  );
}
