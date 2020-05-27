// @ts-check
import React, { useState } from "react";
import axios from "axios";

export default function AdminHomeInfoCreate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };
  const handleDescription = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/homeTeachers/", {
        titulo: title,
        descripsion: description,
      })
      .then((res) => {
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="w-1/2 mediaForumQuestion">
        <form onSubmit={handleSubmit} className="p-2 bglayer2 rounded-md">
          <div className="p-2 bglayer3 rounded-md shadow-md">
              <p className="textyellow text-center mb-2">Cargar nueva informacion</p>
            <div className="">
              <div className="">
                <div className="mb-2">
                  <div className=" ">
                    <input
                      value={title}
                      onChange={handleTitle}
                      type="text"
                      id="title"
                      name="title"
                      className=" w-full rounded-sm p-1 text-black"
                      placeholder="Titulo de tu informacion "
                      required
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <div className="">
                    <textarea
                      value={description}
                      onChange={handleDescription}
                      className="w-full rounded-sm p-1 text-black"
                      rows="8"
                      id="exampleFormControlTextarea1"
                      placeholder="Descripsion de la informacion "
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="">
                  <button
                    type="submit"
                    className="shadow-md w-full font-bold p-1 buttonhoverblack rounded-sm flex justify-center bgyellow text-black border-solid border-2 borderyellow "
                  >
                    SUBIR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
