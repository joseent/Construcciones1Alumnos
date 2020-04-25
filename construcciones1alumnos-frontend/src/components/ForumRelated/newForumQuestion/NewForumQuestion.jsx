//@ts-check
import React, { useState, useEffect } from "react";
import "./NewForumQuestion.css";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

export default function NewForumQuestion() {
  const { id } = useParams();
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionDescription, setQuestionDescription] = useState("");
  const [questionSelector, setQuestionSelector] = useState("");
  const [usuarioNombre, setusuarioNombre] = useState("");
  const [usuarioApellido, setusuarioApellido] = useState("");

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

  useEffect(() => {
    const getUserBiId = (e) => {
      axios
        .get(`http://localhost:3000/users/${id}`)
        .then((res) => {
          setusuarioNombre(res.data.usuario.nombre);
          setusuarioApellido(res.data.usuario.apellido);
        })
        .catch((error) => {
          console.log(error.data);
        });
    };
    getUserBiId();
  }, []);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:3000/Forum/", {
      titulo: questionTitle,
      descripsion: questionDescription,
      tema: questionSelector,
      nombre: usuarioNombre,
      apellido: usuarioApellido
      
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
      <div className="w-1/2">
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
                      <option value={questionSelector}>General</option>
                      <option value={questionSelector}>Madera</option>
                      <option value={questionSelector}>Metal</option>
                      <option value={questionSelector}>Hormigon</option>
                      <option value={questionSelector}>Plastico</option>
                      <option value={questionSelector}>Vidrio</option>
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
                      className="w-full font-bold p-1 button hover:bg-yellow-600 hover:text-black rounded-sm flex justify-center mb-4 bg-black text-yellow-600 border-solid border-2 border-yellow-600 "
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
