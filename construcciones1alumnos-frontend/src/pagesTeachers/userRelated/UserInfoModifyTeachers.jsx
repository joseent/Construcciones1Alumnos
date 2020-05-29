// @ts-check
import React, { useState, useEffect } from "react";
import userLogo from "../../images/userLogo.png";


export default function UserInfoModifyTeachers() {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [mail, setmail] = useState("");
  const [profilePic, setProfilePic] = useState(false);
  const [user, setUser] = useState({});

    const setUserInfo = (userLocal) => {
               setNombre(userLocal.nombre);
          setApellido(userLocal.apellido);
          setDni(userLocal.dni);
          setmail(userLocal.mail);
          setProfilePic(userLocal.image);
         };
  
 useEffect(() => {
    const userLocal = JSON.parse(localStorage.getItem("usuario"))
    setUser(userLocal);
    setUserInfo(userLocal);
  }, []);

  return (
    <div className="container flex justify-center items-center flex-col">
      <div className="w-1/2 text-center bg-gray-900 rounded-md p-6 widthmediafull">
        {profilePic ? (
          <img src={profilePic} alt="" />
        ) : (
          <div className="flex flex-col items-center p-4">
            <img className="rounded w-1/2" src={userLogo} alt=""/>
          {/* <button className="text-yellow-600">
            CAMBIAR FOTO DE PERFIL
          </button> */}
          </div>
        )}
        <div className="p-1 flex text-yellow-600">
          <p className="font-bold mr-2">Nombre: </p>
          <p>{nombre}</p>
        </div>
        <div className="p-1 flex text-yellow-600">
          <p className="font-bold mr-2">Apellido: </p>
          <p>{apellido}</p>
        </div>
        <div className="p-1 flex text-yellow-600">
          <p className="font-bold mr-2">Dni: </p>
          <p>{dni}</p>
        </div>
               <div className="p-1 flex text-yellow-600">
          <p className="font-bold mr-2">Mail: </p>
          <p>{mail}</p>
        </div>
      </div>
    </div>
  );
}
