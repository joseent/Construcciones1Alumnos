// @ts-check
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function AdminTeachersInfo() {
  const [teachersList, setTeachersList] = useState([]);

  const GetTeachersList = async () => {
    axios
      .get("https://construcciones1backend.herokuapp.com/Teachers/")
      .then((res) => {
        console.log(res.data);
        setTeachersList(res.data.profesores);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };
  useEffect(() => {
    GetTeachersList();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://construcciones1backend.herokuapp.com/Teachers/${id}`)
      .then((res) => {
        GetTeachersList();
      })
      .catch((error) => {
        console.log(error.tipo);
      });
  };

  return (
    <div>
      <h4 className="text-center">GESTOR DE DOCENTES</h4>
      <div className="flex justify-center mb-8">
        <ul className="w-10/12 mb-6 overflow-x-scroll">
          {teachersList.map((teachers) => (
            <li className="" key={teachers._id}>
              <div className="flex justify-between">
                <div className="flex w-10/12">
                  <p className="p-2">{teachers.nombre}</p>
                  <p className="p-2">{teachers.apellido}</p>
                  <p className="p-2">{teachers.dni}</p>
                  <p className="p-2">{teachers.usuario}</p>
                  <p className="p-2">{teachers.mail}</p>
                </div>
                <div className="w-1/12">
                  <button
                    onClick={() => handleDelete(teachers._id)}
                    className="bgyellow font-bold rounded-sm p-1 w-full"
                  >
                    BORRAR
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
