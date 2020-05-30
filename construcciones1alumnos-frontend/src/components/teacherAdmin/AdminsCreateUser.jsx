// @ts-check
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function AdminsCreateUser() {
    const history = useHistory();
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [dni, setDni] = useState("");
    const [admin, setAdmin] = useState(false)
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [mail, setMail] = useState("");
    const [ProfilePic, setProfilePic] = useState("");
    const [errorGeneral, setErrorGeneral] = useState(false);
    const handleChangeNombre = (e) => {
      const nombre = e.target.value;
      setNombre(nombre);
    };
    const handleChangeApellido = (e) => {
      const apellido = e.target.value;
      setApellido(apellido);
    };
    const handleChangDNI = (e) => {
      const dni = e.target.value;
      setDni(dni);
    };
    const handleChangeAdmin = (e) => {
      setAdmin(true);
    };
    const handleChangeusuario = (e) => {
      const usuario = e.target.value;
      setUsuario(usuario);
    };
    const handleChangeContrasena = (e) => {
      const contrasena = e.target.value;
      setContrasena(contrasena);
    };
    const handleChangeMail = (e) => {
      const mail = e.target.value;
      setMail(mail);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post("https://construcciones1backend.herokuapp.com/Teachers", {
          nombre: nombre,
          apellido: apellido,
          dni: dni,
          admin : admin,
          usuario: usuario,
          contrasena: contrasena,
          mail: mail,
          image: ProfilePic,
        })
        .then((res) => {
          // setNombre(res.data.documento.nombre);
          // setApellido(res.data.documento.apellido);
          // setDni(res.data.documento.dni);
          // setAdmin(res.data.documento.admin);
          // setUsuario(res.data.documento.usuario);
          // setContrasena(res.data.documento.contrasena);
          // setMail(res.data.documento.mail);
          window.location.reload(false)
          
        })
        .catch((error) => {
          console.log(error.data);
          setErrorGeneral(true);
        });
    };
    return (
      <div className="w-full flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="widthmediafull w-1/2 bglayer1 rounded-md p-6 my-20"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className=" uppercase tracking-wide textyellow text-xs font-bold mb-2">
                NOMBRE
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                value={nombre}
                onChange={handleChangeNombre}
                id="grid-first-name"
                type="text"
                placeholder="Juan"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide textyellow text-xs font-bold mb-2">
                APELLIDO
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={apellido}
                onChange={handleChangeApellido}
                id="grid-last-name"
                type="text"
                placeholder="Perez"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className=" uppercase tracking-wide textyellow text-xs font-bold mb-2">
                DNI
              </label>
              <input
                className="appearance-none  w-full bg-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                value={dni}
                onChange={handleChangDNI}
                id="grid-dni"
                type="text"
                placeholder="11111111"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 flex-col">
              <label className=" uppercase tracking-wide textyellow text-xs font-bold mb-2">
                ADMINISTRADOR
              </label>
             <input className="" type="checkbox" onClick={handleChangeAdmin}/>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className=" uppercase tracking-wide textyellow text-xs font-bold mb-2">
                USUARIO
              </label>
              <input
                className="appearance-none  w-full bg-gray-200 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={usuario}
                onChange={handleChangeusuario}
                id="grid-user"
                type="text"
                placeholder="construcciones1usuario"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className=" uppercase tracking-wide textyellow text-xs font-bold mb-2">
                MAIL
              </label>
              <input
                className="appearance-none  w-full bg-gray-200 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={mail}
                onChange={handleChangeMail}
                id="grid-user"
                type="text"
                placeholder="construcciones1@support.com"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className=" uppercase tracking-wide textyellow text-xs font-bold mb-2">
                CONTRASEÑA
              </label>
              <input
                className="appearance-none  w-full bg-gray-200 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={contrasena}
                onChange={handleChangeContrasena}
                id="grid-password"
                type="password"
                placeholder="**********"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full rounded-md font-bold buttonhoverblack rounded-sm flex justify-center p-2 bgyellow text-black border-solid border-2 borderyellow "
          >
            REGISTRAR
          </button>
          {
            errorGeneral ? <span className="text-red-600">ERROR AL CREAR USUARIO</span> : <></>
          }
        </form>
      </div>
    );
  }
  