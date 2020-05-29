// @ts-check
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Info.css"

export default function NewInfo() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createdOk, setCreatedOk] = useState(false);
  const [generalError, setGeneralError] = useState(false);

  const handleTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };
  const handleDescrption = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://construcciones1backend.herokuapp.com/Information/", {
        titulo: title,
        descripsion: description,
      })
      .then((res) => {
        console.log("informacion subida correctamente");
        setCreatedOk(true);
        setTimeout(() => {
          setCreatedOk(false);
        }, 3000);
      })
      .catch((error) => {
        console.log(error.data);
        setGeneralError(true);
      });
  };
  return (
    <div className="flex justify-center mb-8">
      <div className="w-1/2 infocreatemedia bglayer1 rounded-md p-2">
        <form
          onSubmit={handleSubmit}
          className="bglayer2 p-2 shadow-md rounded-md"
        >
          <div className="mb-3">
            <div className=" ">
              <input
                value={title}
                onChange={handleTitle}
                type="text"
                id="usuario"
                name="usuario"
                className=" w-full rounded-sm p-1 text-black"
                placeholder="Nombre de usuario "
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <div className=" ">
              <textarea
                value={description}
                onChange={handleDescrption}
                className=" w-full rounded-sm p-1 text-black"
                rows="6"
                id="textarea"
                placeholder="Descripcion de tu consulta "
                required
              ></textarea>
            </div>
          </div>

          <div className="p1 mb-3">
            <button
              type="submit"
              className="w-full font-bold p-1 rounded-sm flex justify-center mb-2 border-2 borderyellow bgyellow "
            >
              ENVIAR
            </button>
          </div>
          {generalError ? (
            <p className="bg-red-700 p-2 text-black rounded-sm">
              Error al crear informacion. Intentelo mas tarde nuevamente.
            </p>
          ) : createdOk ? (
            <p className="bg-green-700 p-2 text-black rounded-sm">
              Informacion creada con exito.
            </p>
          ) : (
            <></>
          )}
        </form>
      </div>
    </div>
  );
}
