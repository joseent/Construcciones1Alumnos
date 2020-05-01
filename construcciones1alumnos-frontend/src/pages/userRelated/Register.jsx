// @ts-check
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Register() {
  const history = useHistory();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [libreta, setlibreta] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mail, setMail] = useState("");
  const [ProfilePic, setProfilePic] = useState("");

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
  const handleChangeLibreta = (e) => {
    const libreta = e.target.value;
    setlibreta(libreta);
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
      .post("http://localhost:3000/users/registrar", {
        nombre: nombre,
        apellido: apellido,
        dni: dni,
        libreta: libreta,
        usuario: usuario,
        contrasena: contrasena,
        mail: mail,
        image: ProfilePic,
      })
      .then((res) => {
        setNombre(res.data.documento.nombre);
        setApellido(res.data.documento.apellido);
        setDni(res.data.documento.dni);
        setlibreta(res.data.documento.libreta);
        setUsuario(res.data.documento.usuario);
        setContrasena(res.data.documento.contrasena);
        setMail(res.data.documento.mail);
        history.push('/home')
      })
      .catch((error) => {
        console.log(error.data);
      });
  };
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-1/2 max-w-lg  bg-yellow-600 rounded-md p-6"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              NOMBRE
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              value={nombre}
              onChange={handleChangeNombre}
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
            <p className="text-red-500 text-xs italic">Llene el campo.</p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              APELLIDO
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={apellido}
              onChange={handleChangeApellido}
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              DNI
            </label>
            <input
              className="appearance-none  w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              value={dni}
              onChange={handleChangDNI}
              id="grid-dni"
              type="text"
              placeholder="11111111"
            />
            <p className="text-red-500 text-xs italic">Llene el campo.</p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              LIBRETA
            </label>
            <input
              className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={libreta}
              onChange={handleChangeLibreta}
              id="grid-libreta"
              type="text"
              placeholder="AQ1202020"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              USUARIO
            </label>
            <input
              className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
            <label className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              MAIL
            </label>
            <input
              className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
            <label className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              CONTRASEÑA
            </label>
            <input
              className="appearance-none  w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
          className="w-full rounded-md font-bold button hover:bg-yellow-600 hover:text-black hover:border-black rounded-sm flex justify-center p-2 bg-black text-yellow-600 border-solid border-2 border-yellow-600 "
        >
          REGISTRAR
        </button>
      </form>
    </div>
  );
}
