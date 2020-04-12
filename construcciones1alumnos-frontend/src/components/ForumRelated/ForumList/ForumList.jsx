//@ts-check
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


export default function ForumList() {
  const history =  useHistory();
  const [forumQuestions, setForumQuestions] = useState([]);
const [respondida, setRespondida] = useState(false)
 


useEffect(() => {
    const GetForumList = async () => {
      axios
        .get("http://localhost:3000/Forum/")
        .then((res) => {
          console.log(res.data);
          setForumQuestions(res.data.consultas);
          setRespondida(res.data.consultas.respondido)

        })
        .catch((error) => {
          console.log(error.data);
        });
    };
    GetForumList();
  }, []);

  const handleOnClick= () =>{
console.log("estoy andando bien");

  }

  return (
    <div className="container mx-auto flex justify-center ">
      <ul className="w-1/2 list-group mb-5">
        {forumQuestions.map((consultas) => (
          <li
          key={consultas._id}
          className="flex justify-between mb-4"
          onClick={handleOnClick}
          >        {
            respondida ? (<span>sin responder</span>) : (<i className="fa fa-check"></i>)
          } {consultas.titulo} tema: {consultas.tema}
          
        
          <i className="fa fa-mail-forward"></i>
          </li>
        ))}
      </ul>
    </div>
  );
}
