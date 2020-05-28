// @ts-check
import React, { useEffect } from "react";
import NavBarTeachers from "../components/general/navBar/NavBarTeachers";
import axios from "axios";
import { useState } from "react";
import AdminsCreateUser from "../components/teacherAdmin/AdminsCreateUser";
import AdminHomeInfoCreate from "../components/teacherAdmin/AdminHomeInfoCreate";
import AdminTeachersInfo from "../components/teacherAdmin/AdminTeachersInfo";
export default function HomeTeachers() {
  const [teachersInfo, setTeachersInfo] = useState([]);
  const [user, setUser] = useState({});
  const [teacherAdmin, setTeacherAdmin] = useState(false);
  const [generalError, setGeneralError] = useState(false);
  const [teachersModify, setTeachersModify] = useState(false);

  console.log(user);
  console.log(teacherAdmin);
  // console.log(user.admin);

  // GET TEACHERS INFORMATION
  const GetTeachersInfo = (userLocal) => {
    axios
      .get("https://construcciones1backend.herokuapp.com/homeTeachers")
      .then((res) => {
        console.log(res.data);
        setTeachersInfo(res.data.informacion);
        setTeacherAdmin(userLocal.admin);
        console.log(userLocal.admin);
      })
      .catch((error) => {
        console.log(error.data);
        setGeneralError(true);
      });
  };

  // GET TEACHERS INFORMATION
  const DeleteTeachersInfo = (id) => {
    axios
      .delete(`https://construcciones1backend.herokuapp.com/homeTeachers/${id}`)
      .then((res) => {
        GetTeachersInfo();
      })
      .catch((error) => {
        console.log(error.data);
        setGeneralError(true);
      });
  };

  useEffect(() => {
    const userLocal = JSON.parse(localStorage.getItem("usuario"));
    setUser(userLocal);
    GetTeachersInfo(userLocal);
  }, []);

  const handleTeachersModify = () => {
    setTeachersModify(true);
  };
  const handleTeachersModifyStop = () => {
    setTeachersModify(false);
  };

  return (
    <div className="w-full">
      <NavBarTeachers />
      <div className="w-full flex-col items-center">
        <h4 className="font-bold text-center">ULTIMA INFORMACION IMPORTANTE</h4>
        <ul className="mb-20 flex-col">
          {teachersInfo.map((information) => (
            <div className="w-10/12 bglayer1 rounded-md p-2 flex mb-2">
              <div className="w-full bglayer2 rounded-md                p-2">
                <h4>{information.titulo}</h4>
                <p>{information.descripsion}</p>
              </div>
              {teacherAdmin ? (
                <button
                  className="w-1/12 bgyellow rounded-md"
                  onClick={() => {
                    DeleteTeachersInfo(information._id);
                  }}
                >
                  BORRAR
                </button>
              ) : (
                <></>
              )}
            </div>
          ))}
        </ul>
        {teacherAdmin ? <AdminHomeInfoCreate /> : <></>}
        {teacherAdmin ? (
          teachersModify ? (
            <>
              <AdminTeachersInfo />
              <AdminsCreateUser />
              <button
                onClick={handleTeachersModifyStop}
                className="bgyellow text-black font-bold rounded-md"
              >
                DEJAR DE MODIFICAR
              </button>
            </>
          ) : (
            <button
              onClick={handleTeachersModify}
              className="bgyellow text-black font-bold rounded-md"
            >
              GESTIONAR USUARIOS
            </button>
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
