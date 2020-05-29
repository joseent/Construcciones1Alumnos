// @ts-check
import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

// @ts-ignore
import c1Logo from "../../../images/c1Logo.jpg";
// @ts-ignore
import bgegipt from "../../../images/bgegipt.jpg";


export default function NavBarPublicHome() {
  const history = useHistory();
  const [responsive, setResponsive] = useState(false);
  const [userLogged, setuserLogged] = useState(false);
  const [student, setStudent] = useState(false);
  // @ts-ignore
  const [teacher, setTeacher] = useState(false);

  console.log(userLogged);
  console.log(student);

  const menu = [
    {
      name: "Registrarse",
      to: "/register",
    },
    {
      name: "Iniciar Sesion",
      to: "/login",
    },
  ];

  useEffect(() => {
    setuserLogged(JSON.parse(localStorage.getItem("userLogged")));
  }, []);

  const toggleNavbar = () => setResponsive((state) => !state);

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
    <div className="w-full">
      <div className="w-full relative" style={{height: 70}}>
        <img
          className="Bgegipt w-full hegipt object-cover absolute "
          src={bgegipt}
          alt="Bgegipt"
        />
        <div
          className={`topnavpublic ${responsive ? "responsive" : "absolute"}`}
          id="myTopnav"
        >
          <div className="navContainer">
            <Link to="/" className="active">
              <div className="flex items-center">
                <img style={{height: 50, width: 50}} className="rounded-full mr-2" src={c1Logo} alt="" />
                <h4 className="textNavPublicHome text-black font-bold">
                  CONSTRUCCIONES I
                </h4>
              </div>
            </Link>
            {userLogged ? (
              student ? (
                <button className="text-black bgyellow rounded-md p-1 mt-8" onClick={handleStudent}>
                  INGRESAR
                </button>
              ) : (
                <button className="text-black bgyellow rounded-md p-1 mt-8 " onClick={handleTeacher}>
                  INGRESAR TEACHER
                </button>
              )
            ) : (
              <>
                {menu.map(({ name, to }) => (
                  <Link className="" key={name} to={to}>
                    <p className="bgyellow rounded-md p-1 text-black"> {name}</p>
                  </Link>
                ))}
            <a className="icon" onClick={toggleNavbar}>
              <i className="fa fa-bars mt-6 iconblack"></i>
            </a>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
