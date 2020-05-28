//@ts-check
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./ForumList.css";

export default function ForumList() {
  const history = useHistory();
  const [forumQuestions, setForumQuestions] = useState([]);
  const [respondida, setRespondida] = useState(false);
  const [forumSelector, setForumSelector] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [errorLoading, setErrorLoading] = useState(false);

  const newQuestion = () => {
    history.push("/forumnew");
  };

  const handleChangeSelector = (e) => {
    const selector = e.target.value;
    setForumSelector(selector);
  };

  const GetListByTema = async () => {
    const tema = forumSelector;
    axios
      .get(`https://construcciones1backend.herokuapp.com/Forum/bytema/${tema}`)
      .then((res) => {
        setForumQuestions(res.data.resultados);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const handleOnClick = (id) => {
    console.log(id);
    history.push(`/forumbyid/${id}`);
  };

  useEffect(() => {
    const GetForumList = async () => {
      axios
        .get("https://construcciones1backend.herokuapp.com/Forum/")
        .then((res) => {
          console.log(res.data);
          setForumQuestions(res.data.consultas);
          setRespondida(res.data.consultas.respondido);
          setisLoading(false);
        })
        .catch((error) => {
          console.log(error.data);
          setErrorLoading(true);
        });
    };
    GetForumList();
  }, []);

  return (
    <div className="mediaforumlist w-1/2 mx-auto flex flex-col justify-center">
      <div className="w-full mx-auto flex justify-between items-center mb-5 p-2">
        <div className="flex">
          <select
            className="w-full rounded-sm p-1 text-black"
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
          <div className="">
            <button
              onClick={GetListByTema}
              className="ml-4 p-2 text-black text-bold border-1 borderyellow bgyellow rounded"
              type="button"
            >
              BUSCAR
            </button>
          </div>
        </div>
        <button
          className="bgyellow text-bold text-xl h-12"
          onClick={newQuestion}
        >
          <i className="fa fa-plus m-2"></i>
        </button>
      </div>
      <div className="w-full items-center">
        {isLoading ? (
          errorLoading ? <h2>algo ocurrio intentelo mas tarde</h2> : 
          <div className="w-100 ">
            <div className="borderyellow shadowColor h-16 mb-4 border-2 rounded-md p-6"></div>
            <div className="borderyellow shadowColor h-16 mb-4 border-2 rounded-md p-6"></div>
            <div className="borderyellow shadowColor h-16 mb-4 border-2 rounded-md p-6"></div>
          </div>
        ) : (
          <ul className="w-full list-group mb-5 ulmedia">
            {forumQuestions.map((consultas) => (
              <li
                key={consultas._id}
                className="w-full flex items-center mb-1 p-2 cursor-pointer textyellow sm:min-w-full"
                onClick={() => handleOnClick(consultas._id)}
              >
                <div className="w-full p-4 flex justify-between items-center border borderyellow rounded-md h-20 shadowColor">
                  {consultas.respondido ? (
                    <i className="fa fa-check"></i>
                  ) : (
                    <span> </span>
                  )}
                  <div className="flex-col text-center">
                    <p>titulo: {consultas.titulo}</p>
                    <p>tema: {consultas.tema}</p>
                  </div>
                  <i className="fa fa-mail-forward"></i>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
