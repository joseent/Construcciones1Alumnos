//@ts-check
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function InfoByID() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
const [description, setDescription] = useState("");

  useEffect(() => {
    const getInfoById = (e) => {
      axios
        .get(`http://localhost:3000/information/${id}`)
        .then((res) => {
            setTitle(res.data.informacion.titulo);
            setDescription(res.data.informacion.descripsion);
        })
        .catch((error) => {
          console.log(error.data);
        });
    };
    getInfoById();
  }, []);

  const titletoUpper = title.toUpperCase();

  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="w-1/2 ">
        <div className="text-center bg-gray-900 rounded-md mb-2  p-4">
          <p className="text-yellow-600 font-bold text-xl">{titletoUpper}</p>
        </div>
        <div className="bg-gray-900 rounded-md mb-2 p-4">
          <p className="text-yellow-600 text-bold text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
}
