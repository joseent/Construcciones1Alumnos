// @ts-check
import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css";
// @ts-ignore
import c1Logo from "../../../images/c1Logo.jpg"
import { useEffect } from 'react';
const menu = [
  {
    name: "HOME",
    to: "/hometeachers",
  },
  {
    name: "PUBLICHOME",
    to: "/publichometeachers",
  },
  {
    name: "INSCRIPCIONES",
    to: "/inscriptionsteachers",
  },
  {
    name: "INFO",
    to: "/infoteachers",
  },
  {
    name: "FORO",
    to: "/forumteachers",
  },
  {
    name: "USUARIO",
    to: "/userinfoteachers/:id",
  },
];

export default function NavBarTeachers() {
  const history = useHistory();
    const [responsive, setResponsive] = useState(false);
    const toggleNavbar = () => setResponsive((state) => !state);
    const [userLogged, setUserLogged] = useState(false)

    useEffect(() => {
      setUserLogged(JSON.parse(localStorage.getItem("userLogged"))); 
    
    }, []);
    const handleDesloguear = () => {
      localStorage.clear();
      history.push("/publichome")
    }
  
    return (
        <div className="mb-6">
        <div className={`topnav ${responsive ? "responsive" : ""}`} id="myTopnav">
          <div className="navContainer">
          <Link to="/" className="active">
            <div className="flex items-center p-3">
            <img className="w-12 rounded-full mr-3" src={c1Logo} alt="" />
            </div>
          </Link>
          {menu.map(({ name, to }) => (
            <Link key={name} to={to} className="texthover">
              <p className="textyellow text-sm">{name}</p>
            </Link>
          ))}
          {
            userLogged && 
            <Link to="" className="texthover" onClick={handleDesloguear}>
             <p className="textyellow text-sm"> CERRAR SESION</p>
            </Link>
          }
          <a className="icon" onClick={toggleNavbar}>
            <i className="fa fa-bars mt-6"></i>
          </a>
          </div>
        </div>
          </div>
    )
}
