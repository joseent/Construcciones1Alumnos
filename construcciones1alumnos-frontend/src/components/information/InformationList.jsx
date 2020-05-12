//@ts-check
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function InformationList() {
  const history = useHistory();
  const [InfoList, setInfoList] = useState([]);

  useEffect(() => {
    const GetForumList = async () => {
      axios
        .get("http://localhost:3000/information/")
        .then((res) => {
          console.log(res.data);
          setInfoList(res.data.informacion);
        })
        .catch((error) => {
          console.log(error.data);
        });
    };
    GetForumList();
  }, []);

  const handleOnClick = (id) => {
    console.log(id);
    history.push(`/info/${id}`);
  };

  return (
    <div className="container mx-auto flex justify-center">
      <ul className="w-1/2 list-group mb-5 ulmedia">
        {InfoList.map((informacion) => (
          <li
            key={informacion._id}
            className="flex justify-between items-center mb-4 p-2 border borderyellow rounded-md shadow cursor-pointer textyellow sm:min-w-full bglayer1"
            onClick={() => handleOnClick(informacion._id)}
          >
            <div className="flex-col text-center ml-4">
              <p>titulo: {informacion.titulo}</p> <p>creado: {informacion.created_at}</p>
            </div>
            <i className="fa fa-mail-forward"></i>
          </li>
        ))}
      </ul>
    </div>
  );
}
