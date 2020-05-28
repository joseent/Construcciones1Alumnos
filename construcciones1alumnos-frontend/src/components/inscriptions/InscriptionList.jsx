// @ts-check
import React, { useState } from "react";
import axios from "axios";
import '../inscriptions/InscriptionList.css'
import imageLogo from '../../images/userLogo.png'

export default function InscriptionList() {
  const [userLogo, setUserLogo] = useState(imageLogo)
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
  const [generalError, setGeneralError] = useState(false)

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
      .get("https://construcciones1backend.herokuapp.com/Comition1")
      .then((res) => {
        setcomition1List(res.data.alumnos);
      })
      .catch((error) => {
        console.log(error.tipo);
        setGeneralError(true);
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
      .get("https://construcciones1backend.herokuapp.com/Comition2")
      .then((res) => {
        setcomition2List(res.data.alumnos);
      })
      .catch((error) => {
        console.log(error.tipo);
        setGeneralError(true);
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
      .get("https://construcciones1backend.herokuapp.com/Comition3")
      .then((res) => {
        setcomition3List(res.data.alumnos);
      })
      .catch((error) => {
        console.log(error.tipo);
        setGeneralError(true);
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
      .get("https://construcciones1backend.herokuapp.com/Comition4")
      .then((res) => {
        setcomition4List(res.data.alumnos);
      })
      .catch((error) => {
        console.log(error.tipo);
        setGeneralError(true);
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
      .get("https://construcciones1backend.herokuapp.com/Comition5")
      .then((res) => {
        setcomition5List(res.data.alumnos);
      })
      .catch((error) => {
        console.log(error.tipo);
        setGeneralError(true);
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
      .get("https://construcciones1backend.herokuapp.com/Comition6")
      .then((res) => {
        setcomition6List(res.data.alumnos);
      })
      .catch((error) => {
        console.log(error.tipo);
        setGeneralError(true);
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
      .get("https://construcciones1backend.herokuapp.com/Comition7")
      .then((res) => {
        setcomition7List(res.data.alumnos);
      })
      .catch((error) => {
        console.log(error.tipo);
        setGeneralError(true);
      });
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* COMITION1 */}
      <button
        onClick={handleComition1}
        className={`${
          comition1
            ? "w-4/5 h-12 font-bold bgyellow"
            : "w-4/5 h-12 border-2 borderyellow textyellow font-bold inscriptionsbuttons"
        }`}
      >
        COMISION 1
      </button>
      <div className={`${comition1 ? "block w-4/5 overflow-x-scroll" : "hidden"}`}>
        <div className="w-full flex justify-between">
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">imagen</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">nombre</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">apellido</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">dni</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">libreta</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">mail</span>
        </div>
        {
          generalError ? <p className="text-red-600">Error al buscar la informacion vuelva a intentarlo mas tarde</p> : 
        <ul className="w-full">
          {comition1List.map((alumnos) => (
            <li key={alumnos._id} className="w-full textyellow">
              <div className="w-full flex justify-between">
                  <span className="w-2/12  medialist text-center font-bold border borderyellow"><img className="w-10 ml-8" src={userLogo} alt="userlogo"/></span>
                  <span className="w-2/12  medialist text-center font-bold border borderyellow">{alumnos.apellido}</span>
                  <span className="w-2/12  medialist text-center font-bold border borderyellow">{alumnos.nombre}</span>
                  <span className="w-2/12  medialist text-center font-bold border borderyellow">{alumnos.dni}</span>
                  <span className="w-2/12  medialist text-center font-bold border borderyellow">{alumnos.libreta}</span>
                  <span className="w-2/12  medialist text-center font-bold border borderyellow">{alumnos.mail}</span>
              </div>
            </li>
          ))}
        </ul>
        }
      </div>
      {/* COMITION2 */}
      <button
        onClick={handleComition2}
        className={`${
          comition2
            ? "w-4/5 h-12 font-bold bgyellow"
            : "w-4/5 h-12 border-2 borderyellow textyellow font-bold inscriptionsbuttons"
        }`}
      >
        COMISION 2
      </button>
      <div className={`${comition2 ? "block w-4/5 overflow-x-scroll" : "hidden"}`}>
      <div className="w-full flex justify-between">
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">imagen</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">nombre</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">apellido</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">dni</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">libreta</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">mail</span>
        </div>
        {
          generalError ? <p className="text-red-600">Error al buscar la informacion vuelva a intentarlo mas tarde</p> : 
        <ul className="w-full">
          {comition2List.map((alumnos) => (
            <li key={alumnos._id} className="w-full textyellow">
             <div className="w-full flex justify-between">
                  <span className="w-2/12 medialist text-center font-bold border borderyellow"><img className="w-10 ml-8" src={userLogo} alt="userlogo"/></span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.apellido}</span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.nombre}</span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.dni}</span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.libreta}</span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.mail}</span>
              </div>
            </li>
          ))}
        </ul>}
      </div>
      {/* COMITION3 */}
      <button
        onClick={handleComition3}
        className={`${
          comition3
            ? "w-4/5 h-12 font-bold bgyellow"
            : "w-4/5 h-12 border-2 borderyellow textyellow font-bold inscriptionsbuttons"
        }`}
      >
        COMISION 3
      </button>
      <div className={`${comition3 ? "block w-4/5 overflow-x-scroll" : "hidden"}`}>
      <div className="w-full flex justify-between">
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">imagen</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">nombre</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">apellido</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">dni</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">libreta</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">mail</span>
        </div>
        {
          generalError ? <p className="text-red-600">Error al buscar la informacion vuelva a intentarlo mas tarde</p> : 
        <ul className="w-full">
          {comition3List.map((alumnos) => (
            <li key={alumnos._id} className="w-full textyellow">
              <div className="w-full flex justify-between">
                  <span className="w-2/12 medialist text-center font-bold border borderyellow"><img className="w-10 ml-8" src={userLogo} alt="userlogo"/></span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.apellido}</span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.nombre}</span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.dni}</span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.libreta}</span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.mail}</span>
              </div>
            </li>
          ))}
        </ul>}
      </div>
      {/* COMITION4 */}
      <button
        onClick={handleComition4}
        className={`${
          comition4
            ? "w-4/5 h-12 font-bold bgyellow"
            : "w-4/5 h-12 border-2 borderyellow textyellow font-bold inscriptionsbuttons"
        }`}
      >
        COMISION 4
      </button>
      <div className={`${comition4 ? "block w-4/5 overflow-x-scroll" : "hidden"}`}>
      <div className="w-full flex justify-between">
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">imagen</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">nombre</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">apellido</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">dni</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">libreta</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">mail</span>
        </div>
        {
          generalError ? <p className="text-red-600">Error al buscar la informacion vuelva a intentarlo mas tarde</p> : 
        <ul className="w-full">
          {comition4List.map((alumnos) => (
            <li key={alumnos._id} className="w-full textyellow">
             <div className="w-full flex justify-between">
                  <span className="w-2/12 medialist text-center font-bold border borderyellow"><img className="w-10 ml-8" src={userLogo} alt="userlogo"/></span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.apellido}</span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.nombre}</span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.dni}</span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.libreta}</span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.mail}</span>
              </div>
            </li>
          ))}
        </ul>}
      </div>
      {/* COMITION5 */}
      <button
        onClick={handleComition5}
        className={`${
          comition5
            ? "w-4/5 h-12 font-bold bgyellow"
            : "w-4/5 h-12 border-2 borderyellow textyellow font-bold inscriptionsbuttons"
        }`}
      >
        COMISION 5
      </button>
      <div className={`${comition5 ? "block w-4/5 overflow-x-scroll" : "hidden"}`}>
      <div className="w-full flex justify-between">
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">imagen</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">nombre</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">apellido</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">dni</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">libreta</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">mail</span>
        </div>
        {
          generalError ? <p className="text-red-600">Error al buscar la informacion vuelva a intentarlo mas tarde</p> : 
        <ul className="w-full">
          {comition5List.map((alumnos) => (
            <li key={alumnos._id} className="w-full textyellow">
            <div className="w-full flex justify-between">
                  <span className="w-2/12 medialist text-center font-bold border borderyellow"><img className="w-10 ml-8" src={userLogo} alt="userlogo"/></span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.apellido}</span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.nombre}</span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.dni}</span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.libreta}</span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.mail}</span>
              </div>
            </li>
          ))}
        </ul>}
      </div>
      {/* COMITION6 */}
      <button
        onClick={handleComition6}
        className={`${
          comition6
            ? "w-4/5 h-12 font-bold bgyellow"
            : "w-4/5 h-12 border-2 borderyellow textyellow font-bold inscriptionsbuttons"
        }`}
      >
        COMISION 6
      </button>
      <div className={`${comition6 ? "block w-4/5 overflow-x-scroll" : "hidden"}`}>
      <div className="w-full flex justify-between">
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">imagen</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">nombre</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">apellido</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">dni</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">libreta</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">mail</span>
        </div>
        {
          generalError ? <p className="text-red-600">Error al buscar la informacion vuelva a intentarlo mas tarde</p> : 
        <ul className="w-full">
          {comition6List.map((alumnos) => (
            <li key={alumnos._id} className="w-full textyellow">
             <div className="w-full flex justify-between">
                  <span className="w-2/12 medialist text-center font-bold border borderyellow"><img className="w-10 ml-8" src={userLogo} alt="userlogo"/></span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.apellido}</span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.nombre}</span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.dni}</span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.libreta}</span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.mail}</span>
              </div>
            </li>
          ))}
        </ul>}
      </div>
      {/* COMITION7 */}
      <button
        onClick={handleComition7}
        className={`${
          comition7
            ? "w-4/5 h-12 font-bold bgyellow"
            : "w-4/5 h-12 border-2 borderyellow textyellow font-bold inscriptionsbuttons"
        }`}
      >
        COMISION 7
      </button>
      <div className={`${comition7 ? "block w-4/5 overflow-x-scroll" : "hidden"}`}>
      <div className="w-full flex justify-between">
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">imagen</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">nombre</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">apellido</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">dni</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">libreta</span>
          <span className="w-2/12 medialist textyellow text-center font-bold border borderyellow">mail</span>
        </div>
        {
          generalError ? <p className="text-red-600">Error al buscar la informacion vuelva a intentarlo mas tarde</p> : 
        <ul className="w-full">
          {comition7List.map((alumnos) => (
            <li key={alumnos._id} className="w-full textyellow">
             <div className="w-full flex justify-between">
                  <span className="w-2/12 medialist text-center font-bold border borderyellow"><img className="w-10 ml-8" src={userLogo} alt="userlogo"/></span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.apellido}</span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.nombre}</span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.dni}</span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.libreta}</span>
                  <span className="w-2/12 medialist text-center font-bold border borderyellow">{alumnos.mail}</span>
              </div>
            </li>
          ))}
        </ul>}
      </div>
    </div>
  );
}
