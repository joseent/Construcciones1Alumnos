//@ts-check
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css";
import c1Logo from "../../../images/c1Logo.jpg";
const menu = [
  {
    name: "HOME",
    to: "/home",
  },
  {
    name: "INSCRIPCIONES",
    to: "/inscriptions",
  },
  {
    name: "INFO",
    to: "/info",
  },
  {
    name: "FORO",
    to: "/forum",
  },
  {
    name: "USUARIOS",
    to: "/userinfo/:id",
  },
];

export default function NavBar() {
  const history = useHistory();
  const [responsive, setResponsive] = useState(false);
  const toggleNavbar = () => setResponsive((state) => !state);
  const [userLogged, setUserLogged] = useState(false)

  useEffect(() => {
    setUserLogged(JSON.parse(localStorage.getItem("studentLogged"))); 
  
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
              <span className="textNav textyellow font-bold">CONSTRUCCIONES I</span>
            </div>
          </Link>
          {menu.map(({ name, to }) => (
            <Link key={name} to={to} className="hover:text-black">
             <p className="textyellow"> {name}</p>
            </Link>
          ))}
           {
            userLogged ? <button className="textyellow" onClick={handleDesloguear}>DESLOGUEAR</button> : <span></span>
          }
          <a className="icon" onClick={toggleNavbar}>
            <i className="fa fa-bars mt-6"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
