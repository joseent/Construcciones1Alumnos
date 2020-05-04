// @ts-check
import React, { useState } from "react";
import axios from "axios";

export default function InscriptionList() {
  const [comition1, setcomition1] = useState(false);
  const [comition2, setcomition2] = useState(false);
  const [comition3, setcomition3] = useState(false);
  const [comition4, setcomition4] = useState(false);
  const [comition5, setcomition5] = useState(false);
  const [comition6, setcomition6] = useState(false);
  const [comition7, setcomition7] = useState(false);
  const [comition1List, setcomition1List] = useState([]);
  const [comition2List, setcomition2List] = useState([]);
  const [comition3List, setcomition3List] = useState([]);
  const [comition4List, setcomition4List] = useState([]);
  const [comition5List, setcomition5List] = useState([]);
  const [comition6List, setcomition6List] = useState([]);
  const [comition7List, setcomition7List] = useState([]);

  // COMITION1
  const handleComition1 = () => {
    setcomition1(true);
    setcomition2(false);
    setcomition3(false);
    setcomition4(false);
    setcomition5(false);
    setcomition6(false);
    setcomition7(false);

    axios
      .get("http://localhost:3000/Comition1")
      .then((res) => {
        setcomition1List(res.data.alumnos);
      })
      .catch((error) => {
        console.log(error.tipo);
      });
  };
  // COMITION2
  const handleComition2 = () => {
    setcomition1(false);
    setcomition2(true);
    setcomition3(false);
    setcomition4(false);
    setcomition5(false);
    setcomition6(false);
    setcomition7(false);

    axios
      .get("http://localhost:3000/Comition2")
      .then((res) => {
        setcomition2List(res.data.alumnos);
      })
      .catch((error) => {
        console.log(error.tipo);
      });
  };
  // COMITION3
  const handleComition3 = () => {
    setcomition1(false);
    setcomition2(false);
    setcomition3(true);
    setcomition4(false);
    setcomition5(false);
    setcomition6(false);
    setcomition7(false);

    axios
      .get("http://localhost:3000/Comition3")
      .then((res) => {
        setcomition3List(res.data.alumnos);
      })
      .catch((error) => {
        console.log(error.tipo);
      });
  };
  // COMITION4
  const handleComition4 = () => {
    setcomition1(false);
    setcomition2(false);
    setcomition3(false);
    setcomition4(true);
    setcomition5(false);
    setcomition6(false);
    setcomition7(false);

    axios
      .get("http://localhost:3000/Comition4")
      .then((res) => {
        setcomition4List(res.data.alumnos);
      })
      .catch((error) => {
        console.log(error.tipo);
      });
  };
  // COMITION5
  const handleComition5 = () => {
    setcomition1(false);
    setcomition2(false);
    setcomition3(false);
    setcomition4(false);
    setcomition5(true);
    setcomition6(false);
    setcomition7(false);

    axios
      .get("http://localhost:3000/Comition5")
      .then((res) => {
        setcomition5List(res.data.alumnos);
      })
      .catch((error) => {
        console.log(error.tipo);
      });
  };
  // COMITION6
  const handleComition6 = () => {
    setcomition1(false);
    setcomition2(false);
    setcomition3(false);
    setcomition4(false);
    setcomition5(false);
    setcomition6(true);
    setcomition7(false);

    axios
      .get("http://localhost:3000/Comition6")
      .then((res) => {
        setcomition6List(res.data.alumnos);
      })
      .catch((error) => {
        console.log(error.tipo);
      });
  };
  // COMITION7
  const handleComition7 = () => {
    setcomition1(false);
    setcomition2(false);
    setcomition3(false);
    setcomition4(false);
    setcomition5(false);
    setcomition6(false);
    setcomition7(true);

    axios
      .get("http://localhost:3000/Comition7")
      .then((res) => {
        setcomition7List(res.data.alumnos);
      })
      .catch((error) => {
        console.log(error.tipo);
      });
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* COMITION1 */}
      <button
        onClick={handleComition1}
        className={`${
          comition1
            ? "w-4/5 h-12 font-bold bg-yellow-600"
            : "w-4/5 h-12 border-2 border-yellow-600 text-yellow-600 font-bold hover:bg-yellow-600 hover:text-black hover:font-bold"
        }`}
      >
        COMISION 1
      </button>
      <div className={`${comition1 ? "block w-4/5" : "hidden"}`}>
        <ul className="w-full">
          {comition1List.map((alumnos) => (
            <li key={alumnos._id} className="w-full text-yellow-600">
              <div className="w-full border-2 border-yellow-600 p-2">
                <div className=" flex justify-center">
                  <span className="p-1">APELLIDO: {alumnos.apellido}</span>
                  <span className="p-1">NOMBRE: {alumnos.nombre}</span>
                </div>
                <div className="">
                  <span className="p-1">DNI: {alumnos.dni}</span>
                  <span className="p-1">LIBRETA: {alumnos.libreta}</span>
                  <span className="p-1">E-MAIL: {alumnos.mail}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* COMITION2 */}
      <button
        onClick={handleComition2}
        className={`${
          comition2
            ? "w-4/5 h-12 font-bold bg-yellow-600"
            : "w-4/5 h-12 border-2 border-yellow-600 text-yellow-600 font-bold hover:bg-yellow-600 hover:text-black hover:font-bold"
        }`}
      >
        COMISION 2
      </button>
      <div className={`${comition2 ? "block w-4/5" : "hidden"}`}>
        <ul className="w-full">
          {comition2List.map((alumnos) => (
            <li key={alumnos._id} className="w-full text-yellow-600">
              <div className="w-full border-2 border-yellow-600 p-2">
                <div className=" flex justify-center">
                  <span className="p-1">APELLIDO: {alumnos.apellido}</span>
                  <span className="p-1">NOMBRE: {alumnos.nombre}</span>
                </div>
                <div className="">
                  <span className="p-1">DNI: {alumnos.dni}</span>
                  <span className="p-1">LIBRETA: {alumnos.libreta}</span>
                  <span className="p-1">E-MAIL: {alumnos.mail}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* COMITION3 */}
      <button
        onClick={handleComition3}
        className={`${
          comition3
            ? "w-4/5 h-12 font-bold bg-yellow-600"
            : "w-4/5 h-12 border-2 border-yellow-600 text-yellow-600 font-bold hover:bg-yellow-600 hover:text-black hover:font-bold"
        }`}
      >
        COMISION 3
      </button>
      <div className={`${comition3 ? "block w-4/5" : "hidden"}`}>
        <ul className="w-full">
          {comition3List.map((alumnos) => (
            <li key={alumnos._id} className="w-full text-yellow-600">
              <div className="w-full border-2 border-yellow-600 p-2">
                <div className=" flex justify-center">
                  <span className="p-1">APELLIDO: {alumnos.apellido}</span>
                  <span className="p-1">NOMBRE: {alumnos.nombre}</span>
                </div>
                <div className="">
                  <span className="p-1">DNI: {alumnos.dni}</span>
                  <span className="p-1">LIBRETA: {alumnos.libreta}</span>
                  <span className="p-1">E-MAIL: {alumnos.mail}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* COMITION4 */}
      <button
        onClick={handleComition4}
        className={`${
          comition4
            ? "w-4/5 h-12 font-bold bg-yellow-600"
            : "w-4/5 h-12 border-2 border-yellow-600 text-yellow-600 font-bold hover:bg-yellow-600 hover:text-black hover:font-bold"
        }`}
      >
        COMISION 4
      </button>
      <div className={`${comition4 ? "block w-4/5" : "hidden"}`}>
        <ul className="w-full">
          {comition4List.map((alumnos) => (
            <li key={alumnos._id} className="w-full text-yellow-600">
              <div className="w-full border-2 border-yellow-600 p-2">
                <div className=" flex justify-center">
                  <span className="p-1">APELLIDO: {alumnos.apellido}</span>
                  <span className="p-1">NOMBRE: {alumnos.nombre}</span>
                </div>
                <div className="">
                  <span className="p-1">DNI: {alumnos.dni}</span>
                  <span className="p-1">LIBRETA: {alumnos.libreta}</span>
                  <span className="p-1">E-MAIL: {alumnos.mail}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* COMITION5 */}
      <button
        onClick={handleComition5}
        className={`${
          comition5
            ? "w-4/5 h-12 font-bold bg-yellow-600"
            : "w-4/5 h-12 border-2 border-yellow-600 text-yellow-600 font-bold hover:bg-yellow-600 hover:text-black hover:font-bold"
        }`}
      >
        COMISION 5
      </button>
      <div className={`${comition5 ? "block w-4/5" : "hidden"}`}>
        <ul className="w-full">
          {comition5List.map((alumnos) => (
            <li key={alumnos._id} className="w-full text-yellow-600">
              <div className="w-full border-2 border-yellow-600 p-2">
                <div className=" flex justify-center">
                  <span className="p-1">APELLIDO: {alumnos.apellido}</span>
                  <span className="p-1">NOMBRE: {alumnos.nombre}</span>
                </div>
                <div className="">
                  <span className="p-1">DNI: {alumnos.dni}</span>
                  <span className="p-1">LIBRETA: {alumnos.libreta}</span>
                  <span className="p-1">E-MAIL: {alumnos.mail}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* COMITION6 */}
      <button
        onClick={handleComition6}
        className={`${
          comition6
            ? "w-4/5 h-12 font-bold bg-yellow-600"
            : "w-4/5 h-12 border-2 border-yellow-600 text-yellow-600 font-bold hover:bg-yellow-600 hover:text-black hover:font-bold"
        }`}
      >
        COMISION 6
      </button>
      <div className={`${comition6 ? "block w-4/5" : "hidden"}`}>
        <ul className="w-full">
          {comition6List.map((alumnos) => (
            <li key={alumnos._id} className="w-full text-yellow-600">
              <div className="w-full border-2 border-yellow-600 p-2">
                <div className=" flex justify-center">
                  <span className="p-1">APELLIDO: {alumnos.apellido}</span>
                  <span className="p-1">NOMBRE: {alumnos.nombre}</span>
                </div>
                <div className="">
                  <span className="p-1">DNI: {alumnos.dni}</span>
                  <span className="p-1">LIBRETA: {alumnos.libreta}</span>
                  <span className="p-1">E-MAIL: {alumnos.mail}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* COMITION7 */}
      <button
        onClick={handleComition7}
        className={`${
          comition7
            ? "w-4/5 h-12 font-bold bg-yellow-600"
            : "w-4/5 h-12 border-2 border-yellow-600 text-yellow-600 font-bold hover:bg-yellow-600 hover:text-black hover:font-bold"
        }`}
      >
        COMISION 7
      </button>
      <div className={`${comition7 ? "block w-4/5" : "hidden"}`}>
        <ul className="w-full">
          {comition7List.map((alumnos) => (
            <li key={alumnos._id} className="w-full text-yellow-600">
              <div className="w-full border-2 border-yellow-600 p-2">
                <div className=" flex justify-center">
                  <span className="p-1">APELLIDO: {alumnos.apellido}</span>
                  <span className="p-1">NOMBRE: {alumnos.nombre}</span>
                </div>
                <div className="">
                  <span className="p-1">DNI: {alumnos.dni}</span>
                  <span className="p-1">LIBRETA: {alumnos.libreta}</span>
                  <span className="p-1">E-MAIL: {alumnos.mail}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
