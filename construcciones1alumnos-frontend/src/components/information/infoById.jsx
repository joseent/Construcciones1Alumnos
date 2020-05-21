//@ts-check
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../information/InfoById.css"

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
      <div className="mediafull w-1/2 bglayer2 p-2 rounded-lg">
        <div className="text-center bglayer3 rounded-md mb-2 p-4">
          <p className="textyellow font-bold text-md">{title}</p>
        </div>
        <div className="bglayer3 rounded-md p-4">
          <p className="text-bold text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
