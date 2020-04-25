// @ts-check
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function UserInfoModify() {
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [libreta, setlibreta] = useState("");
  const [mail, setmail] = useState("");
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    const getQuestionById = (e) => {
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
      <div className="w-1/2 text-center bg-gray-900 rounded-md p-6">
        {profilePic ? (
          <img src={profilePic} alt="" />
        ) : (
          <button className="text-yellow-600 text-bold text-xl h-12 w-12 rounded-full border m-4">
            <i className="far fa-user-circle"></i>
          </button>
        )}
        <div className="p-1">
          <p>Nombre: </p>
          <p>{nombre}</p>
        </div>
        <div className="p-1">
          <p>Apellido: </p>
          <p>{apellido}</p>
        </div>
        <div className="p-1">
          <p>Dni: </p>
          <p>{dni}</p>
        </div>
        <div className="p-1">
          <p>Libreta: </p>
          <p>{libreta}</p>
        </div>
        <div className="p-1">
          <p>Mail: </p>
          <p>{mail}</p>
        </div>
      </div>
    </div>
  );
}
