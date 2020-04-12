//@ts-check
import React, { useState, useEffect } from "react";
import "./ForumById.css";
import axios from "axios";

export default function NewForumQuestion() {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionDescription, setQuestionDescription] = useState("");
  const [questionAnswer, setquestionAnswer] = useState("");

  useEffect(() => {
    const getQuestionById = (e) => {
      e.preventDefault();
      axios
        .get("http://localhost:3000/Forum/")
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
    <div className="row d-flex justify-content-center">
      <div className="QuestionBg shadow col-10 bg-dark">
        <div className="row">
          <div className="col">
            <p>Titulo</p>
            <p>{questionTitle}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Descripcion</p>
            <p>{questionDescription}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="textColor">Respuesta</p>
            <p>{questionAnswer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
