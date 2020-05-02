// @ts-check
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function NewInfo() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };
  const handleDescrption = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    axios
      .post("http://localhost:3000/Information/", {
        titulo: title,
        descripsion: description,
      })
      .then((res) => {
console.log("informacion subida correctamente");

      })
      .catch((error) => {
        console.log(error.data);
      });
  };
  return (
    <div className="flex justify-center mb-8">
      <div className="w-1/2">
        <form onSubmit={handleSubmit}>
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
                rows="8"
                id="textarea"
                placeholder="Descripcion de tu consulta "
                required
              ></textarea>
            </div>
          </div>

          <div className="p1 mb-3">
            <button
              type="submit"
              className="w-full font-bold p-1 button hover:bg-yellow-600 hover:text-black rounded-sm flex justify-center mb-4 p-1 bg-black text-yellow-600 border-solid border-2 border-yellow-600 "
            >
              ENVIAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
