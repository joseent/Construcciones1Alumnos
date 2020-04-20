//@ts-check
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import './ForumList.css'


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

  const handleOnClick= id =>{
console.log(id);
history.push(`/forumbyid/${id}`)

  }

  return (
    <div className="container mx-auto flex justify-center">
      <ul className="w-1/2 list-group mb-5 ulmedia">
        {forumQuestions.map((consultas) => (
          <li
          key={consultas._id}
          className="flex justify-between items-center mb-4 p-2 border border-yellow-600 rounded-md shadow shadowColor cursor-pointer text-yellow-600  sm:min-w-full"
          onClick={()=> handleOnClick(consultas._id)}
          >        {
            respondida ? (<span>sin responder</span>) : (<i className="fa fa-check"></i>)
          } <div className="flex-col text-center">
            <p>titulo: {consultas.titulo}</p> <p>tema: {consultas.tema}</p> 
            </div>
          
        
          <i className="fa fa-mail-forward"></i>
          </li>
        ))}
      </ul>
    </div>
  );
}
