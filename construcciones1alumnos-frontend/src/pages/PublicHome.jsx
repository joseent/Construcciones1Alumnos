// @ts-check
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import c1Logo from "../images/c1Logo.jpg";
import bgegipt from "../images/bgegipt.jpg";
import bgegiptsm from "../images/bgegipt2sm.jpg";
import infofau from "../images/infoFau.jpeg";
import areatecnica from "../images/areatecnica.jpg";

import "../pages/PublicHome.css";
import "../components/general/navBar/NavBar.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import PublicHomeSeminars from "../components/publicHome/PublicHomeSeminars";
import PublicHomePublicity from "../components/publicHome/PublicHomePublicity";
import PublicHomeClassRoomPics from "../components/publicHome/PublicHomeClassRoomPics";
import Teachers from "./publicHomeInformation/Teachers";

export default function PublicHome() {
  const history = useHistory();
  const [responsive, setResponsive] = useState(false);
  const [userLogged, setuserLogged] = useState(false);
  const [student, setStudent] = useState(false);
  const [teacher, setTeacher] = useState(false);

  console.log(userLogged);
  console.log(student);

  const menu = [
    {
      name: "registrarse",
      to: "/register",
    },
    {
      name: "loguearse",
      to: "/login",
    },
  ];

  useEffect(() => {
    setuserLogged(JSON.parse(localStorage.getItem("userLogged")));
  }, []);

  const toggleNavbar = () => setResponsive((state) => !state);

  const handleInfoFau = () => {
    history.push("/fau");
  };
  const handleInfoCatedra = () => {
    history.push("/catedra");
  };
  const handleMetodologia = () => {
    history.push("/metodologia");
  };
  useEffect(() => {
    setStudent(JSON.parse(localStorage.getItem("studentLogged")));
    setTeacher(JSON.parse(localStorage.getItem("teacherLogged")));
    
  }, []);
  
  const handleStudent = () => {
    history.push("/home");
  };
  const handleTeacher = () => {
    history.push("/hometeachers");
  };

  return (
    <div className=" flex flex-col items-center bgColor">
      {/* FONDO */}

      <div className="w-full relative">
        <img
          className="Bgegipt w-full h-32 object-cover absolute "
          src={bgegipt}
          alt="Bgegipt"
        />
        <div
          className={`topnavpublic ${responsive ? "responsive" : "absolute"}`}
          id="myTopnav"
        >
          <div className="navContainer">
            <Link to="/" className="active">
              <div className="flex items-center p-3">
                <img className="w-20 rounded-full mr-2" src={c1Logo} alt="" />
                <h3 className="textNavPublicHome text-black font-bold">
                  CONSTRUCCIONES I
                </h3>
              </div>
            </Link>
            {userLogged ? ( student ? <button className="text-black" onClick={handleStudent}>
                INGRESAR
              </button> : <button className="text-black" onClick={handleTeacher}>
                INGRESAR TEACHER
              </button>
            ) : (
              <>
                {menu.map(({ name, to }) => (
                  <Link key={name} to={to}>
                    <p className="text-black"> {name}</p>
                  </Link>
                ))}
              </>
            )}

            <a className="icon" onClick={toggleNavbar}>
              <i className="fa fa-bars mt-6"></i>
            </a>
          </div>
        </div>
      </div>

      {/* FONDO */}
      {/* <div className="flex w-full items-center mediatitle shadow-lg bglayer2 p-4 rounded-md">
          <img
            className="logomedia rounded-full w-1/12 mr-6"
            src={c1Logo}
            alt=""
          />
          <div className="header w-full flex items-center">
            <h1 className="text-center pagetitle font-bold">CONSTRUCCIONES 1</h1>
          </div>
          <div className=" flex justify-end">
            <div className="flex">
              <div className="text-center p-2">
                <Link to="/register" className="font-bold text-xs tracking-tight">
                  <h6>REGISTRARSE</h6>
                </Link>
              </div>
              <div className="text-center p-2">
                <Link to="/login" className="font-bold text-xs tracking-tight">
                  <h6>LOGUEAR</h6>
                </Link>
              </div>
            </div>
          </div>
        </div> */}

      {/* CONTENT*/}
      <div className="mediafullwidth w-11/12 flex flex-col items-center divide-y divide-yellow-600">
        {/* general info */}
        <div className="flex my-20">
          <img src={infofau} className="w-2/5 informativeimage" alt="" />
          <div className="infofaumedia w-3/5 flex flex-col justify-center items-center">
            <div className="w-4/5 text-center mt-20">
              <h3>INFO FACULTAD</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci ullam maxime, nobis et animi quis sit quia eveniet
                distinctio dignissimos? Est maiores provident aspernatur nobis
                eaque, cupiditate ex quia quos?
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
              <h3>INFO CATEDRA</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci ullam maxime, nobis et animi quis sit quia eveniet
                distinctio dignissimos? Est maiores provident aspernatur nobis
                eaque, cupiditate ex quia quos?
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
        <div className="mediafullwidth w-4/5 flex flex-col">
          <h3 className="text-center mt-20">METODOLOGIA</h3>
          <div className="flex w-full mediasm">
            <div className="metodologycol w-4/12 flex flex-col items-center text-center mt-10">
              <h4>PRESENCIAL</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci ullam maxime, nobis et animi quis sit quia eveniet
                distinctio dignissimos? Est maiores provident aspernatur nobis
                eaque, cupiditate ex quia quos?
              </p>
              <button
                onClick={handleMetodologia}
                className="bgyellow shadow-lg seemorebutton rounded-md mt-8 mb-8 w-1/5 p-2 font-bold"
              >
                VER MAS
              </button>
            </div>
            <div className="metodologycol w-4/12 flex-col text-center mt-10">
              <h4>SEMI-PRESENCIAL</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci ullam maxime, nobis et animi quis sit quia eveniet
                distinctio dignissimos? Est maiores provident aspernatur nobis
                eaque, cupiditate ex quia quos?
              </p>
              <button
                onClick={handleMetodologia}
                className="bgyellow shadow-lg seemorebutton rounded-md mt-8 mb-8 w-1/5 p-2 font-bold"
              >
                VER MAS
              </button>
            </div>
            <div className="metodologycol w-4/12 flex-col text-center mt-10">
              <h4>DISTANCIA</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci ullam maxime, nobis et animi quis sit quia eveniet
                distinctio dignissimos? Est maiores provident aspernatur nobis
                eaque, cupiditate ex quia quos?
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
        <div className="mediafullwidth w-4/5 flex justify-center">
          <PublicHomeSeminars />
        </div>
        {/* publicity */}
        <div className="mediafullwidth w-4/5 flex justify-center">
          <PublicHomePublicity />
        </div>
        {/* pictures */}
        <div className="mediafullwidth w-4/5 flex justify-center">
          <PublicHomeClassRoomPics />
        </div>
        {/* teachers */}
        <Teachers />
      </div>
      {/* <BottomBar /> */}
    </div>
  );
}
