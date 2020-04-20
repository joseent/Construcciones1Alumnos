// @ts-check
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function UserInfoModify() {
    const { id } = useParams();
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [dni, setDni] = useState("");
    const [libreta, setlibreta] = useState("");
    const [mail, setmail] = useState("");

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
          
          })
          .catch((error) => {
            console.log(error.data);
          });
      };
      getQuestionById();
    }, []);

    return (
        <div className="container xl flex justify-center items-center flex-col">
            <div className="w-1/2 text-center bg-gray-900 rounded-md">

            <img src="" alt=""/>
            <p>{nombre}</p>
            <p>{apellido}</p>
            <p>{dni}</p>
            <p>{libreta}</p>
            <p>{mail}</p>

            </div>
        </div>
    )
}
