//@ts-check
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function InformationListTeachers() {
  const history = useHistory();
  const [InfoList, setInfoList] = useState([]);
  const [errorGeneral, setErrorGeneral] = useState(false);
  const [deleteOk, setDeleteOk] = useState(false);
  const [deleteError, setDeleteError] = useState(false);

  const GetForumList = async () => {
    axios
      .get("http://localhost:3000/information/")
      .then((res) => {
        console.log(res.data);
        setInfoList(res.data.informacion);
      })
      .catch((error) => {
        console.log(error.data);
        setErrorGeneral(true);
      });
  };
  useEffect(() => {
    GetForumList();
  }, []);

  const handleOnClick = (id) => {
    console.log(id);
    history.push(`/infoteachers/${id}`);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/information/${id}`)
      .then((res) => {
        setDeleteOk(true);
        GetForumList();
        setTimeout(() => {
          setDeleteOk(false);
        }, 3000);
      })
      .catch((error) => {
        console.log(error.tipo);
        setDeleteError(true);
      });
  };

  return (
    <div className="container mx-auto flex justify-center">
      {errorGeneral ? (
        <h2 className="text-red-600">
          UN ERROR OCURRIO. VUELVA A INTENTARLO MAS TARDE.
        </h2>
      ) : (
        <ul className="w-7/12 list-group mb-5 ulmedia">
          {InfoList.map((informacion) => (
            <div className="flex border borderyellow shadowColor rounded-md mb-3" key={informacion._id}>
              <div className="flex">
                <li
                  
                  className="flex justify-between items-center p-2  textyellow cursor-pointer sm:min-w-full"
                  onClick={() => handleOnClick(informacion._id)}
                >
                  <div className="flex-col text-center">
                    <p>titulo: {informacion.titulo}</p>{" "}
                    <p>creado: {informacion.createdAt}</p>
                  </div>
                  <div className="flex items-center">
                    <i className="fa fa-mail-forward"></i>
                  </div>
                </li>
                <button
                  onClick={() => {
                    handleDelete(informacion._id);
                  }}
                  className="bgyellow font-bold text-black p-2 rounded-r-sm"
                >
                  BORRAR
                </button>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
