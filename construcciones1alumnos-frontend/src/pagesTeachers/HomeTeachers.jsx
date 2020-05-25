// @ts-check
import React, { useEffect } from "react";
import NavBarTeachers from "../components/general/navBar/NavBarTeachers";
import axios from "axios";
import { useState } from "react";
export default function HomeTeachers() {
  const [teachersInfo, setTeachersInfo] = useState([]);
  const [user, setUser] = useState({});
  const [nombreteacher, setNombreteacher] = useState("");
  const [teacherAdmin, setTeacherAdmin] = useState(false);
  const [generalError, setGeneralError] = useState(false);

  console.log(user);
  console.log(teacherAdmin);
  // console.log(user.admin);

  // GET TEACHERS INFORMATION
  const GetTeachersInfo = (userLocal) => {
    axios
      .get("http://localhost:3000/homeTeachers")
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

  useEffect(() => {
    const userLocal = JSON.parse(localStorage.getItem("usuario"))
    setUser(userLocal);
    GetTeachersInfo(userLocal);
  }, []);

  return (
    <div>
      <NavBarTeachers />
      <h4 className="font-bold text-center">ULTIMA INFORMACION IMPORTANTE</h4>
      <ul className="w-10/12 mb-20">
        {teachersInfo.map((information) => (
          <div className="w-full bglayer1 rounded-md p-2">
            <div className="bglayer2 rounded-md p-2">
              <p>{information.titulo}</p>
              <p>{information.descripsion}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
