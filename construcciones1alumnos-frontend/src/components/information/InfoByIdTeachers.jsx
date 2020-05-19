//@ts-check
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

export default function InfoByIDTeachersComp() {
  const history = useHistory();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errorGeneral, setErrorGeneral] = useState(false)

  useEffect(() => {
    const getInfoById = (e) => {
      axios
        .get(`http://localhost:3000/information/${id}`)
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

  const handleDelete = (e) => {
    axios
      .delete(`http://localhost:3000/information/${id}`)
      .then((res) => {
        console.log("elemento borrado");
        history.push("/infoteachers");
      })
      .catch((error) => {
        console.log(error.tipo);
      });
  };

  const titletoUpper = title.toUpperCase();

  return (
    <div className="flex justify-center items-center flex-col ">
         {
        errorGeneral ? <h2 className="text-red-600">UN ERROR OCURRIO. VUELVA A INTENTARLO MAS TARDE.</h2> :   
      <div className="w-1/2 ">
        <div className="text-center bg-gray-900 rounded-md mb-2  p-4">
          <p className="text-yellow-600 font-bold text-xl">{titletoUpper}</p>
        </div>
        <div className="bg-gray-900 rounded-md mb-2 p-4">
          <p className="text-yellow-600 text-bold text-lg">{description}</p>
        </div>
        <button onClick={handleDelete} className="w-full bg-yellow-600 rounded-md font-bold p-4">
          BORRAR
        </button>
      </div>}
    </div>
  );
}
