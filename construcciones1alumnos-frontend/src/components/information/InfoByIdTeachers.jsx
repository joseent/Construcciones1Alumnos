//@ts-check
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import "./InfoById.css"

export default function InfoByIDTeachersComp() {
  const history = useHistory();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errorGeneral, setErrorGeneral] = useState(false)

  useEffect(() => {
    const getInfoById = (e) => {
      axios
        .get(`https://construcciones1backend.herokuapp.com/information/${id}`)
        .then((res) => {
          setTitle(res.data.informacion.titulo);
          setDescription(res.data.informacion.descripsion);
        })
        .catch((error) => {
          console.log(error.data);
          setErrorGeneral(true);
        });
    };
    getInfoById();
  }, []);


  const titletoUpper = title.toUpperCase();

  return (
    <div className="flex justify-center items-center flex-col ">
         {
        errorGeneral ? <h2 className="text-red-600">UN ERROR OCURRIO. VUELVA A INTENTARLO MAS TARDE.</h2> :   
      <div className="w-1/2 bglayer1 p-2 rounded-md mediafull">
        <div className="text-center bglayer2 rounded-md mb-2 p-4 shadow-md">
          <p className="textyellow font-bold text-xl">{titletoUpper}</p>
        </div>
        <div className="bglayer2 rounded-md mb-2 p-4 shadow-md">
          <p className="textyellow text-bold text-md">{description}</p>
        </div>
      </div>}
    </div>
  );
}
