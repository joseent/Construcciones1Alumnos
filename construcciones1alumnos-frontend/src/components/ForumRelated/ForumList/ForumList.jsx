//@ts-check
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ForumList() {
  const [forumQuestions, setForumQuestions] = useState([]);
  // const [Forumtheme, setForumtheme] = useState("")

  useEffect(() => {
    const GetForumList = async () => {
      axios
        .get("http://localhost:3000/Forum/")
        .then((res) => {
          console.log(res.data);
          setForumQuestions(res.data.consultas);
        })
        .catch((error) => {
          console.log(error.data);
        });
    };
    GetForumList();
  }, []);

  return (
    <div className="container">
      <ul className="list-group">
        {forumQuestions.map((consultas) => (
          <li
          key={consultas._id}
          className=" p-3 mt-1 list-group-item d-flex justify-content-between align-items-center bg-dark text-light rounded"
          >        
          <i className="fa fa-check"></i>
          {consultas.titulo} 
          <i className="fa fa-mail-forward"></i>
          </li>
        ))}
      </ul>
    </div>
  );
}
