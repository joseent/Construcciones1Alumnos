// @ts-check
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css";
import c1Logo from "../../../images/c1Logo.jpg"
const menu = [
  {
    name: "PUBLICHOME",
    to: "/publichometeachers",
  },
  {
    name: "HOME",
    to: "/hometeachers",
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
    name: "USUARIOS",
    to: "/userinfoteachers/:id",
  },
];

export default function NavBarTeachers() {
    const [responsive, setResponsive] = useState(false);
    const toggleNavbar = () => setResponsive((state) => !state);
  
    return (
        <div className="mb-6">
        <div className={`topnav ${responsive ? "responsive" : ""}`} id="myTopnav">
          <div className="navContainer">
          <Link to="/" className="active">
            <div className="flex items-center p-3">
            <img className="w-12 rounded-full mr-3" src={c1Logo} alt=""/>
            <span className="textNav font-bold">CONSTRUCCIONES I</span>
            </div>
          </Link>
          {menu.map(({ name, to }) => (
            <Link key={name} to={to}>
              {name}
            </Link>
          ))}
          <a className="icon" onClick={toggleNavbar}>
            <i className="fa fa-bars mt-6"></i>
          </a>
          </div>
        </div>
          </div>
    )
}
