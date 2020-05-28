//@ts-check
import React, { useState, useEffect, useLayoutEffect } from "react";
import "./NewForumQuestion.css";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

export default function NewForumQuestion() {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionDescription, setQuestionDescription] = useState("");
  const [questionSelector, setQuestionSelector] = useState("");
  const [usuarioNombre, setusuarioNombre] = useState("");
   
  const handleChangeTitle = (e) => {
    const title = e.target.value;
    setQuestionTitle(title);
  };
  
  const handleChangeDescription = (e) => {
    const description = e.target.value;
    setQuestionDescription(description);
  };
  
  const handleChangeSelector = (e) => {
    const selector = e.target.value;
    setQuestionSelector(selector);
  };
    
    const setUserInfo = (userLocal) => {
      setusuarioNombre(userLocal.nombre + " " + userLocal.apellido )
     
    };
    
 
  useEffect(() => {
    const userLocal = JSON.parse(localStorage.getItem("alumno"))
    setUser(userLocal);
    setUserInfo(userLocal);
  }, []);

     const handleSubmit = (e) => {
      e.preventDefault();
      axios
      .post("https://construcciones1backend.herokuapp.com/Forum/", {
        titulo: questionTitle,
        descripsion: questionDescription,
        tema: questionSelector,
        usuario: usuarioNombre,
        
      })
      .then((res) => {
        setQuestionTitle(res.data.consultas.titulo);
        setQuestionDescription(res.data.consultas.descripsion);
        setQuestionSelector(res.data.consultas.tema);
        history.push('/forum')
      })
        .catch((error) => {
          console.log(error.data);
        });
    };

    return (
    <div className="flex justify-center">
      <div className="w-1/2 mediaForumQuestion">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="">
              <div className="">
                <div className="mb-2">
                  <div className=" ">
                    <input
                      value={questionTitle}
                      onChange={handleChangeTitle}
                      type="text"
                      id="title"
                      name="title"
                      className=" w-full rounded-sm p-1 text-black"
                      placeholder="Titulo de tu consulta "
                      required
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <div className="">
                    <select
                      onChange={handleChangeSelector}
                      className="w-full rounded-sm p-1 text-black"
                      id="inputGroupSelect04"
                      aria-label="Example select with button addon"
                      required
                    >
                      <option defaultValue>Temas</option>
                      <option value="general">General</option>
                      <option value="madera">Madera</option>
                      <option value="metal">Metal</option>
                      <option value="hormigon">Hormigon</option>
                      <option value="plastico">Plastico</option>
                      <option value="vidrio">Vidrio</option>
                    </select>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="">
                    <textarea
                      value={questionDescription}
                      onChange={handleChangeDescription}
                      className="w-full rounded-sm p-1 text-black"
                      rows="8"
                      id="exampleFormControlTextarea1"
                      placeholder="Descripcion de tu consulta "
                      required
                    ></textarea>
                  </div>
                </div>

                  <div className="">
                    <button
                     type="submit"
                      className="w-full font-bold p-1 buttonhoverblack rounded-sm flex justify-center mb-4 bgyellow text-black border-solid border-2 borderyellow "
                    >
                      ENVIAR
                    </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
