//@ts-check
import React, { useState, useEffect } from "react";
import "./ForumById.css";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

export default function ForumByIdTeachersComp() {
  const history = useHistory();
  const { id } = useParams();
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionDescription, setQuestionDescription] = useState("");
  const [questionAnswer, setquestionAnswer] = useState("");
  const [user, setUser] = useState({});
  const [teacherAdmin, setTeacherAdmin] = useState(false);

  const handleChangeQuestionAnswer = (e) => {
    const questionAnswer = e.target.value;
    setquestionAnswer(questionAnswer);
  };

  
    const getQuestionById = (userLocal) => {
      axios
        .get(`https://construcciones1backend.herokuapp.com/Forum/${id}`)
        .then((res) => {
          setQuestionTitle(res.data.consultas.titulo);
          setQuestionDescription(res.data.consultas.descripsion);
          setquestionAnswer(res.data.consultas.respuesta);
          setTeacherAdmin(userLocal.admin);
        })
        .catch((error) => {
          console.log(error.data);
        });
    };
   

  useEffect(() => {
    const userLocal = JSON.parse(localStorage.getItem("usuario"));
    setUser(userLocal);
    getQuestionById(userLocal);
  }, []);

  const handlePut = (e) => {
    axios
      .put(`https://construcciones1backend.herokuapp.com/Forum/${id}`, {
      respuesta: questionAnswer,
      respondido: true
    }
      )
      .then((res) => {
        console.log("elemento modificado");
        setquestionAnswer(res.data.consultas.respuesta);
        history.push("/forumteachers");
      })
      .catch((error) => {
        console.log(error.tipo);
      });
  };

  const handleDelete = (e) => {
    axios
      .delete(`https://construcciones1backend.herokuapp.com/Forum/${id}`)
      .then((res) => {
        console.log("elemento borrado");
        history.push("/forumteachers");
      })
      .catch((error) => {
        console.log(error.tipo);
      });
  };

  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="w-1/2 mediasm bglayer1 p-2 rounded-md">
        <div className="text-center bglayer2 rounded-md mb-2 p-4">
          <p className="font-bold">Titulo</p>
          <p className="text-white">{questionTitle}</p>
        </div>
        <div className="text-center bglayer2 rounded-md mb-2 p-4">
          <p className="font-bold">Descripcion</p>
          <p className="text-white">{questionDescription}</p>
        </div>
        <div className="text-center bgyellow rounded-md mb-2 p-4">
          <p className="font-bold text-black">Respuesta</p>
          <textarea
            value={questionAnswer}
            onChange={handleChangeQuestionAnswer}
            className="w-11/12 rounded-sm text-black"
            rows="4"
            id="exampleFormControlTextarea1"
            placeholder="Descripcion de tu consulta "
            required
          ></textarea>
        </div>
        <div>
          <button
            onClick={handlePut}
            className="w-full bgyellow rounded-md font-bold p-4 mb-2"
          >
            MODIFICAR
          </button>
        </div>
        {
          teacherAdmin ?
        <div>
                <button
            onClick={handleDelete}
            className="w-full bgyellow rounded-md font-bold p-4"
          >
            BORRAR
          </button>
        </div> :  <></> 
        }
      </div>
    </div>
  );
}
