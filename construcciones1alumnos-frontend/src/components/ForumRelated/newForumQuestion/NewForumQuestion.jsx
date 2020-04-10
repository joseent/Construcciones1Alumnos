//@ts-check
import React, { useState } from "react";
import "./NewForumQuestion.css";
import axios from "axios";

export default function NewForumQuestion() {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionDescription, setQuestionDescription] = useState("");

  const handleChangeTitle = (e) => {
    const title = e.target.value;
    setQuestionTitle(title);
  };

  const handleChangeDescription = (e) => {
    const description = e.target.value;
    setQuestionDescription(description);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/Forum/', {titulo: questionTitle, descripsion: questionDescription})
    .then((res) => {
       setQuestionTitle(res.data.consultas.titulo);
      setQuestionDescription(res.data.consultas.descripsion);
    })
    .catch((error) => {
      console.log(error.data);
    });
  };

  return (
    <div className="row d-flex justify-content-center">
      <div className="QuestionBg shadow col-10 bg-dark">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="row-10 d-flex justify-content-center">
              <div className="col">
                
                <div className="row mt-4 p-1 d-flex justify-content-center">
                  <div className="col">
                    <input
                      value={questionTitle}
                      onChange={handleChangeTitle}
                      type="text"
                      id="title"
                      name="title"
                      className="shadow-sm form-control"
                      placeholder="Titulo de tu consulta "
                      />
                  </div>
                </div>

                <div className="row p-1 d-flex justify-content-center">
                  <div className="col h-8 form-group ">
                                        <textarea
                      value={questionDescription}
                      onChange={handleChangeDescription}
                      className="form-control"
                      rows="8"
                      id="exampleFormControlTextarea1"
                      placeholder="Descripcion de tu consulta "
                      
                    ></textarea>
                  </div>
                </div>

                <div className="row p-1 d-flex justify-content-center mb-4">
                  <div className="col">
                    <button
                      type="submit"
                      className="shadow btn btn-warning btn-lg btn-block font-weight-bold"
                    >
                      ENVIAR
                    </button>
                  </div>
                </div>                
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
