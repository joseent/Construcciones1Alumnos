//@ts-check
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./ForumList.css";

export default function ForumListTeachers() {
  const history = useHistory();
  const [forumQuestions, setForumQuestions] = useState([]);
  const [respondida, setRespondida] = useState(false);
  const [forumSelector, setForumSelector] = useState("");
  const [user, setUser] = useState({});
  const [teacherAdmin, setTeacherAdmin] = useState(false);

  const handleChangeSelector = (e) => {
    const selector = e.target.value;
    setForumSelector(selector);
  };

  const GetListByTema = async () => {
    console.log("estoy andando");
    const tema = forumSelector;
    axios
      .get(`http://localhost:3000/Forum/bytema/${tema}`)
      .then((res) => {
        setForumQuestions(res.data.resultados);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const handleOnClick = (id) => {
    console.log(id);
    history.push(`/forumbyidteachers/${id}`);
  };

  const GetForumList = async (userLocal) => {
    axios
      .get("http://localhost:3000/Forum/")
      .then((res) => {
        console.log(res.data);
        setForumQuestions(res.data.consultas);
        setRespondida(res.data.consultas.respondido);
        setTeacherAdmin(userLocal.admin);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  useEffect(() => {
    const userLocal = JSON.parse(localStorage.getItem("usuario"));
    setUser(userLocal);
    GetForumList(userLocal);
  }, []);

  return (
    <div className="w-1/2 mx-auto flex flex-col justify-center">
      <div className="w-full mx-auto flex justify-between items-center mb-5 barmedia p-2">
        <div className="w-full flex">
          <select
            className="flex-grow rounded-sm p-1 text-black"
            id="inputGroupSelect04"
            aria-label="Example select with button addon"
            onChange={handleChangeSelector}
          >
            <option defaultValue>Temas</option>
            <option value="general">General</option>
            <option value="madera">Madera</option>
            <option value="metal">Metal</option>
            <option value="hormigon">Hormigon</option>
            <option value="plastico">Plastico</option>
            <option value="vidrio">Vidrio</option>
          </select>

          <button
            onClick={GetListByTema}
            className="w-3/12 p-2 text-yellow-600 text-bold border border-yellow-600 rounded"
            type="button"
          >
            BUSCAR
          </button>
        </div>
      </div>
      <div className="w-full mx-auto items-center">
        <ul className="w-full list-group mb-5 ulmedia">
          {forumQuestions.map((consultas) => (
            <li
              key={consultas._id}
              className="flex items-center mb-4 p-2 cursor-pointer text-yellow-600 sm:min-w-full"
              onClick={() => handleOnClick(consultas._id)}
            >
              <div className="p-4 flex justify-between items-center border border-yellow-600 rounded-md h-20 w-4/5 shadowColor">
                {consultas.respondido ? (
                  <i className="fa fa-check"></i>
                ) : (
                  <span> </span>
                )}
                <div className="flex-col text-center">
                  <p>titulo: {consultas.titulo}</p>{" "}
                  <p>tema: {consultas.tema}</p>
                </div>
                <i className="fa fa-mail-forward"></i>
              </div>
              <div className="p-4 border border-yellow-600 rounded-md h-20 w-1/5 shadowColor">
                <span>{consultas.usuario}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
