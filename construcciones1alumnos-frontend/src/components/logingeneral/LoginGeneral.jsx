// @ts-check
import React, { useState } from "react";
import "../logingeneral/LoginForm.css";
import c1Logo from "../../images/c1Logo.jpg";
import { Link, useHistory } from "react-router-dom";
import bgegipt from "../../images/bgegipt.jpg";
import axios from "axios";

export default function LoginGeneral() {
  const history = useHistory();
  const [usuarioAlumno, setUsuarioAlumno] = useState("");
  const [contrasenaAlumno, setContrasenaAlumno] = useState("");
  const [idAlumno, setIdAlumno] = useState("");
  const [StudentObject, setStudentObject] = useState({})
  const [loginStudent, setloginStudent] = useState(true);
  const [toLocalHost, setToLocalHost] = useState(false);
  //   TEACHERS
  const [usuarioTeachers, setUsuarioTeachers] = useState("");
  const [contrasenaTeachers, setContrasenaTeachers] = useState("");
  const [idTeachers, setIdTeachers] = useState("");
  const [TeacherObjetct, setTeacherObjetct] = useState({});
  const [loginTeachers, setLoginTeachers] = useState(false);
  // GENERAL
  const [loginError, setloginError] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);

  const student = JSON.stringify(StudentObject);
  const teacher = JSON.stringify(TeacherObjetct);

  if (toLocalHost) {
    localStorage.setItem("idusuario", idAlumno);
    localStorage.setItem("alumno", student);
  } else {
    localStorage.setItem("idusuario", idTeachers);
    localStorage.setItem("usuario", teacher);
  }

  const handleviewPasswordOn = (e) => {
    setViewPassword(true);
  };
  const handleviewPasswordOff = (e) => {
    setViewPassword(false);
  };

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
        setIdAlumno(res.data.respuesta[0]._id);
        setStudentObject(res.data.respuesta[0]);
        setToLocalHost(true);
        localStorage.setItem("userLogged", "true");
        localStorage.setItem("studentLogged", "true");

        history.push("/home");
      })
      .catch((error) => {
        console.log(error.data);
        setloginError(true);
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
        setIdTeachers(res.data.respuesta[0]._id);
        setTeacherObjetct(res.data.respuesta[0]);
        localStorage.setItem("userLogged", "true");
        localStorage.setItem("teacherLogged", "true");

        history.push("/hometeachers");
      })
      .catch((error) => {
        console.log(error.data);
        setloginError(true);
      });
  };

  const LoginStudent = () => {
    setloginStudent(true);
    setLoginTeachers(false);
  };
  const LoginTeachers = () => {
    setLoginTeachers(true);
    setloginStudent(false);
  };

  return (
    <div>
      {/* loginstudents */}
      <div className="flex justify-center items-center bgColor h-screen">
        <img
          className="BgegiptLogin bg-local overflow-hidden h-screen relative"
          src={bgegipt}
          alt="Bgegipt"
        />

        <div className="absolute loginForm w-4/12 bglayer2 rounded-md p-6 loginmedia ">
          <div className="w-full mt-1">
            {/* switch buttons */}
            <div>
              <button
                onClick={LoginStudent}
                className={`${
                  loginStudent
                    ? "bgyellow text-black font-bold shadow-lg rounded-l-md"
                    : "textyellow shadow-lg rounded-l-md"
                } w-1/2 border-2 borderyellow shadow-xl p-2`}
              >
                ALUMNO
              </button>
              <button
                onClick={LoginTeachers}
                className={`${
                  loginTeachers
                    ? "bgyellow text-black font-bold  rounded-r-md"
                    : "textyellow"
                } w-1/2 border-2 borderyellow shadow-xl p-2 rounded-r-md`}
              >
                PROFESOR
              </button>
            </div>

            {/* login students */}
            <form
              className={`${loginStudent ? "block" : "hidden"}`}
              onSubmit={handleSubmitAlumno}
            >
              <div>
                <div className="mt-8">
                  <div className="flex flex-col">
                    <div className="flex justify-center">
                      <img
                        className="rounded-full shadow-2xl w-1/2  mb-5"
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
                    {viewPassword ? (
                      <div className="mb-3">
                        <div className="w-full bg-white rounded-sm p-1">
                          <input
                            value={contrasenaAlumno}
                            onChange={handleChangeContrasenaAlumno}
                            type="text"
                            id="contrasena"
                            name="contrasena"
                            className="w-11/12 text-black"
                            placeholder="Contraseña"
                            required
                          />
                          <i
                            onClick={handleviewPasswordOff}
                            className="fas fa-eye-slash"
                          ></i>
                        </div>
                      </div>
                    ) : (
                      <div className="mb-3">
                        <div className="w-full bg-white rounded-sm p-1">
                          <input
                            value={contrasenaAlumno}
                            onChange={handleChangeContrasenaAlumno}
                            type="password"
                            id="contrasena"
                            name="contrasena"
                            className="w-11/12 text-black"
                            placeholder="Contraseña"
                            required
                          />
                          <i
                            onClick={handleviewPasswordOn}
                            className="fas fa-eye"
                          ></i>
                        </div>
                      </div>
                    )}
                    <div className="p1 mb-3">
                      <button
                        type="submit"
                        className="w-full font-bold p-1 buttonLogin rounded-md flex justify-center mb-4 p-1 bgyellow border-solid border-2 borderyellow "
                      >
                        ENTRAR
                      </button>
                      {loginError ? (
                        <p className="text-red-600">
                          usuario o contraseña incorrecta
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>
            {/* loginTeachers */}
            <form
              className={`${loginTeachers ? "block" : "hidden"}`}
              onSubmit={handleSubmitTeachers}
            >
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
                          className="w-full rounded-sm p-1 text-black"
                          placeholder="Nombre de usuario profesor"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      {viewPassword ? (
                        <div className="w-full bg-white rounded-sm p-1 ">
                          <input
                            value={contrasenaTeachers}
                            onChange={handleChangeContrasenaTeachers}
                            type="text"
                            id="contrasena"
                            name="contrasena"
                            className="w-11/12 text-black"
                            placeholder="Contraseña"
                            required
                          />
                          <i
                            onClick={handleviewPasswordOff}
                            className="fas fa-eye-slash"
                          ></i>
                        </div>
                      ) : (
                        <div className="w-full bg-white rounded-sm p-1">
                          <input
                            value={contrasenaTeachers}
                            onChange={handleChangeContrasenaTeachers}
                            type="password"
                            id="contrasena"
                            name="contrasena"
                            className="w-11/12 text-black"
                            placeholder="Contraseña"
                            required
                          />
                          <i
                            onClick={handleviewPasswordOn}
                            className="fas fa-eye"
                          ></i>
                        </div>
                      )}
                    </div>

                    <div className="p1 mb-3">
                      <button
                        type="submit"
                        className="w-full font-bold p-1 buttonLogin rounded-md flex justify-center mb-4 p-1 bgyellow border-solid border-2 borderyellow "
                      >
                        ENTRAR
                      </button>
                      {loginError ? (
                        <p className="text-red-600">
                          usuario o contraseña incorrecta
                        </p>
                      ) : (
                        <></>
                      )}
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
