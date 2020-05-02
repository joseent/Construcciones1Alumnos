//@ts-check
import React, { useState } from "react";
import "../loginForm/LoginForm.css";
import c1Logo from "../loginForm/c1Logo.jpg";
import { Link, useHistory } from "react-router-dom";
import bgegipt from "../loginForm/bgegipt.jpg";
import axios from "axios";

export default function LoginForm() {
  const history = useHistory();
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [id, setId] = useState("");

  const handleChangeUsuario = (e) => {
    const usuario = e.target.value;
    setUsuario(usuario);
  };

  const handleChangeContrasena = (e) => {
    const contrasena = e.target.value;
    setContrasena(contrasena);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users/login", {
        usuario: usuario,
        contrasena: contrasena,
      })
      .then((res) => {
        const idl = res.data.respuesta.mail;
        // setId(res.data.respuesta._id);
        console.log(idl);
        
        // localStorage.setItem('idusuario', idd)
          history.push("/home");
        // const timer = setTimeout(() => {

        // },1000)
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <img
          className="Bgegipt bg-local w-full relative"
          src={bgegipt}
          alt="Bgegipt"
        />
        <div className="absolute w-1/4  bg-gray-800 rounded-md p-6 loginmedia">
          <form onSubmit={handleSubmit}>
            <div>
              <div className="">
                <div className="flex flex-col">
                  <div className="flex justify-center">
                    <img
                      className="rounded-full w-1/2  mb-5"
                      src={c1Logo}
                      alt=""
                    />
                  </div>
                  <div className="mb-3">
                    <div className=" ">
                      <input
                        value={usuario}
                        onChange={handleChangeUsuario}
                        type="text"
                        id="usuario"
                        name="usuario"
                        className=" w-full rounded-sm p-1 text-black"
                        placeholder="Nombre de usuario "
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className=" ">
                      <input
                        value={contrasena}
                        onChange={handleChangeContrasena}
                        type="password"
                        id="contrasena"
                        name="contrasena"
                        className=" w-full rounded-sm p-1 text-black"
                        placeholder="Contraseña"
                        required
                      />
                    </div>
                  </div>

                  <div className="p1 mb-3">
                    <button
                      type="submit"
                      className="w-full font-bold p-1 button hover:bg-yellow-600 hover:text-black rounded-sm flex justify-center mb-4 p-1 bg-black text-yellow-600 border-solid border-2 border-yellow-600 "
                    >
                      ENTRAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
