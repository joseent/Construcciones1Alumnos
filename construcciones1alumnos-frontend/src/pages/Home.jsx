//@ts-check
import React, { useState } from "react";
import "../pages/Home.css";
import NavBar from "../components/general/navBar/NavBar.jsx";
import c1Cronograma from "../images/c1cronograma.png";
import TeachersCards from "../components/teachers/TeachersCards";
import { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  const [info, setInfo] = useState({});
  const [errorGeneral, setErrorGeneral] = useState(false)
  
  useEffect(() => {
    const GetForumList = async () => {
      axios
      .get("http://localhost:3000/information/")
      .then((res) => {
        console.log(res.data);
        setInfo(res.data.informacion[0]);
      })
              .catch((error) => {
          console.log(error.data);
          setErrorGeneral(true)
        });
    };
    GetForumList();
  }, []);

  const handleOnClick = (id) => {
    console.log(id);
    history.push(`/info/${id}`);
  };

  return (
    <div className="bgColor">
      <NavBar />
      <div className="w-full flex flex-col items-center ">
        {/* teachers info */}
        <div className="w-4/5 flex justify-center">
          <TeachersCards />
        </div>
        <div className="w-4/5 text-yellow-600">
          <h4 className="text-center uppercase">{info.titulo}</h4>    
          
          <p className="overflow-hidden h-24">{info.descripsion}</p>            
          <br />
          <div className="flex justify-center items-center">
          <button onClick={() => handleOnClick(info._id)} className="bgyellow text-black font-bold p-2 my-6 rounded-sm m-1 ">
          LEER MAS
        </button>
          </div>
          <br />
          <img src={c1Cronograma} alt="" />
        </div>
      </div>
    </div>
  );
}
