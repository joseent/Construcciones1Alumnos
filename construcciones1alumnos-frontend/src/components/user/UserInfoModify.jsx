// @ts-check
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import userLogo from "../../images/userLogo.png"

export default function UserInfoModify() {
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [libreta, setlibreta] = useState("");
  const [mail, setmail] = useState("");
  const [profilePic, setProfilePic] = useState(false);

  useEffect(() => {
    const getQuestionById = (e) => {
      const id = window.localStorage.getItem("idusuario");
      axios
        .get(`http://localhost:3000/users/${id}`)
        .then((res) => {
          setNombre(res.data.usuario.nombre);
          setApellido(res.data.usuario.apellido);
          setDni(res.data.usuario.dni);
          setlibreta(res.data.usuario.libreta);
          setmail(res.data.usuario.mail);
          setProfilePic(res.data.usuario.image);
        })
        .catch((error) => {
          console.log(error.data);
        });
    };
    getQuestionById();
  }, []);

  return (
    <div className="container flex justify-center items-center flex-col">
      <div className="w-1/2 text-center bglayer1 rounded-md p-6">
        {profilePic ? (
          <img src={profilePic} alt="" />
        ) : (
          <div className="flex flex-col items-center p-4">
            <img className="rounded w-1/2" src={userLogo} alt=""/>
          <button className="textyellow">
            CAMBIAR FOTO DE PERFIL
          </button>
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
