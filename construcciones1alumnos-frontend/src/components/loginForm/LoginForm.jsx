//@ts-check
import React, { useState, useEffect } from "react";
import "../loginForm/LoginForm.css";
import c1Logo from "../loginForm/c1Logo.jpg";

export default function LoginForm() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleChangeUsuario = (e) => {
    const usuario = e.target.value;
    setUsuario(usuario);
  };

  const handleChangeContrasena = (e) => {
    const contrasena = e.target.value;
    setContrasena(contrasena);
  };

  const handleSubmit = (e) => {
    e.preventDefaul();
  };

  return (
    <div className="row d-flex justify-content-center">
      <div className="LoginBg shadow col-4 bg-light">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="row-4 p-3 d-flex justify-content-center">
              <div className="col d-flex justify-content-center">
                <img className="w-16 rounded-full" src={c1Logo} alt="c1Logo" />
              </div>
            </div>

            <div className="row-4 d-flex justify-content-center">
              <div className="col">
                <div className="row p-1 d-flex justify-content-center">
                  <div className="col">
                    <input
                      value={usuario}
                      onChange={handleChangeUsuario}
                      type="text"
                      id="username"
                      name="username"
                      className="shadow-sm form-control"
                      placeholder="nombre de usuario"
                    />
                  </div>
                </div>
                <div className="row p-1 d-flex justify-content-center">
                  <div className="col">
                    <input
                      value={contrasena}
                      onChange={handleChangeContrasena}
                      id="password"
                      type="password"
                      name="password"
                      className="shadow-sm form-control"
                      placeholder="contraseña"
                    />
                  </div>
                </div>
                <div className="row p-1 d-flex justify-content-center font-weight-bold">
                  <div className="col">
                    <input
                      className="shadow-sm mr-1"
                      type="checkbox"
                      name="rememberusername"
                      id="rememberusername"
                      value="1"
                    />
                    <span>Recordar nombre de usuario</span>
                  </div>
                </div>

                <div className="row p-1 d-flex justify-content-center">
                  <div className="col">
                    <button
                      type="submit"
                      className="shadow btn btn-warning btn-lg btn-block font-weight-bold"
                    >
                      ACCEDER
                    </button>
                  </div>
                </div>
                <div className="row p-3">
                  <div className="col">
                    <div className="olvContra font-weight-bold text-center">
                      <p>¿Olvidó su nombre de usuario o contraseña?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="row p-1 d-flex justify-content-center">
          <div className="col">
            <button className="shadow mb-2 btn btn-light btn-lg btn-block font-weight-bold">
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
