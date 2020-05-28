// @ts-check
import React, { useState, useEffect } from "react";
import userLogo from "../../images/userLogo.png";

export default function UserInfoModify() {
  const [user, setUser] = useState({});
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [libreta, setlibreta] = useState("");
  const [mail, setmail] = useState("");
  const [profilePic, setProfilePic] = useState(false);
  const [errorGeneral, seterrorGeneral] = useState(false);
  

  const setUserInfo = (userLocal) => {
    setNombre(userLocal.nombre);
    setApellido(userLocal.apellido);
    setDni(userLocal.dni);
    setlibreta(userLocal.libreta);
    setmail(userLocal.mail);
    setProfilePic(userLocal.image);
  };

  useEffect(() => {
    const userLocal = JSON.parse(localStorage.getItem("alumno"));
    setUser(userLocal);
    setUserInfo(userLocal);
  }, []);

  return (
    <div className="mediafullwidth container flex justify-center items-center flex-col">
      <div className="w-1/2 text-center bglayer1 rounded-md p-6">
        {errorGeneral ? (
          <div className="w-full flex flex-col justify-center align-center">
            <h3>UN ERROR OCURRIO</h3>
            <h3>VUELVA A INTENTARLO MAS TARDE</h3>
          </div>
        ) : (
          <div className="flex flex-col items-center p-4">
            {" "}
            {profilePic ? (
              <img src={profilePic} alt="" />
            ) : (
              <img className="rounded w-1/2" src={userLogo} alt="" />
            )}
            {/* <button className="textyellow">CAMBIAR FOTO DE PERFIL</button> */}
          </div>
        )}
        <div className="p-1 flex">
          <p className="font-bold mr-2">Nombre: </p>
          <p>{nombre}</p>
        </div>
        <div className="p-1 flex">
          <p className="font-bold mr-2">Apellido: </p>
          <p>{apellido}</p>
        </div>
        <div className="p-1 flex">
          <p className="font-bold mr-2">Dni: </p>
          <p>{dni}</p>
        </div>
        <div className="p-1 flex">
          <p className="font-bold mr-2">Libreta: </p>
          <p>{libreta}</p>
        </div>
        <div className="p-1 flex">
          <p className="font-bold mr-2">Mail: </p>
          <p>{mail}</p>
        </div>
      </div>
    </div>
  );
}
