// @ts-check
import React, { useState } from "react";
import "../loginForm/LoginForm.css";
import c1Logo from "../loginForm/c1Logo.jpg";
import { Link, useHistory } from "react-router-dom";
import bgegipt from "../loginForm/bgegipt.jpg";
import axios from "axios";

export default function LoginGeneral() {
  const history = useHistory();
  const [usuarioAlumno, setUsuarioAlumno] = useState("");
  const [contrasenaAlumno, setContrasenaAlumno] = useState("");
  const [idAlumno, setIdAlumno] = useState("");
  const [loginStudent, setloginStudent] = useState(true);
  //   TEACHERS
  const [usuarioTeachers, setUsuarioTeachers] = useState("");
  const [contrasenaTeachers, setContrasenaTeachers] = useState("");
  const [idTeachers, setIdTeachers] = useState("");
  const [loginTeachers, setLoginTeachers] = useState(false);
  //   LOGIN STUDENTS
  const handleChangeUsuarioAlumno = (e) => {
    const usuarioAlumnoo = e.target.value;
    setUsuarioAlumno(usuarioAlumnoo);
  };

  const handleChangeContrasenaAlumno = (e) => {
    const contrasenaAlumnoo = e.target.value;
    setContrasenaAlumno(contrasenaAlumnoo);
  };

  const handleSubmitAlumno = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users/login", {
        usuario: usuarioAlumno,
        contrasena: contrasenaAlumno,
      })
      .then((res) => {
        setIdAlumno(res.data.respuesta._id);

        localStorage.setItem('idusuario', idAlumno)
        history.push("/home");
      
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  //   TEACHERS LOGIN

  const handleChangeUsuarioTeachers = (e) => {
    const usuarioTeacherss = e.target.value;
    setUsuarioTeachers(usuarioTeacherss);
  };

  const handleChangeContrasenaTeachers = (e) => {
    const contrasenaTeacherss = e.target.value;
    setContrasenaTeachers(contrasenaTeacherss);
  };

  const handleSubmitTeachers = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/Teachers/login", {
        usuario: usuarioTeachers,
        contrasena: contrasenaTeachers,
      })
      .then((res) => {
        const idl = res.data.respuesta.mail;
        // setId(res.data.respuesta._id);
        console.log(idl);

        // localStorage.setItem('idusuario', idd)
        history.push("/hometeachers");
        // const timer = setTimeout(() => {

        // },1000)
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const LoginStudent = () => {
    setloginStudent(true);
    setLoginTeachers(false);
}
const LoginTeachers = () => {
    setLoginTeachers(true);
      setloginStudent(false)
}

  return (
    <div>
      {/* loginstudents */}
      <div className="flex justify-center items-center">
        <img
          className="Bgegipt bg-local w-full relative"
          src={bgegipt}
          alt="Bgegipt"
        />

        <div className="absolute w-1/4  bg-gray-800 rounded-md p-6 loginmedia">
          <div className="w-full mt-1">
            <div>
              <button onClick={LoginStudent} className={`${loginStudent ? "bg-yellow-600 text-black font-bold" : "text-yellow-600"} w-1/2 border-2 border-yellow-600  p-2`}>
                ALUMNO
              </button>
              <button onClick={LoginTeachers} className={`${loginTeachers ? "bg-yellow-600 text-black font-bold" : "text-yellow-600"} w-1/2 border-2 border-yellow-600 p-2`}>
                PROFESOR
              </button>
            </div>
            <form className={`${loginStudent ? "block" : "hidden"}`} onSubmit={handleSubmitAlumno}>
              <div>
                <div className="mt-8">
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
                          value={usuarioAlumno}
                          onChange={handleChangeUsuarioAlumno}
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
                          value={contrasenaAlumno}
                          onChange={handleChangeContrasenaAlumno}
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
            {/* loginTeachers */}
            <form  className={`${loginTeachers ? "block" : "hidden"}`} onSubmit={handleSubmitTeachers}>
              <div>
                <div className="mt-8">
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
                          value={usuarioTeachers}
                          onChange={handleChangeUsuarioTeachers}
                          type="text"
                          id="usuario"
                          name="usuario"
                          className=" w-full rounded-sm p-1 text-black"
                          placeholder="Nombre de usuario profesor"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className=" ">
                        <input
                          value={contrasenaTeachers}
                          onChange={handleChangeContrasenaTeachers}
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
    </div>
  );
}
