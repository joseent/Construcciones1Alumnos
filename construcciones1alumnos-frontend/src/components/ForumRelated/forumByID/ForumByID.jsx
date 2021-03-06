//@ts-check
import React, { useState, useEffect } from "react";
import "./ForumById.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ForumByID() {
  const { id } = useParams();
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionDescription, setQuestionDescription] = useState("");
  const [questionAnswer, setquestionAnswer] = useState("");

  useEffect(() => {
    const getQuestionById = (e) => {
      axios
        .get(`https://construcciones1backend.herokuapp.com/Forum/${id}`)
        .then((res) => {
          setQuestionTitle(res.data.consultas.titulo);
          setQuestionDescription(res.data.consultas.descripsion);
          setquestionAnswer(res.data.consultas.respuesta);
        })
        .catch((error) => {
          console.log(error.data);
        });
    };
    getQuestionById();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="w-1/2 mediasm">
        <div className="w-full text-center bglayer2 rounded-md mb-2">
          <p className="font-bold">Titulo</p>
          <p className="text-white">{questionTitle}</p>
        </div>
        <div className="w-full text-center bglayer2 rounded-md mb-2">
          <p className="font-bold">Descripcion</p>
          <p className="text-white">{questionDescription}</p>
        </div>
        <div className="w-full text-center bgyellow rounded-md pb-2">
          <p className="font-bold text-black">Respuesta</p>
          <p className="text-black ">{questionAnswer}</p>
        </div>
      </div>
    </div>
  );
}
