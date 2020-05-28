// @ts-check
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PublicHomeEdit.css"

export default function ClassRoomEdit() {
  // classroomPost
  const [classTitle, setClassTitle] = useState("");
  const [classImage, setClassImage] = useState("");
  const [classAnswer, setClassAnswer] = useState("");
  const [classPics, setClassPics] = useState([]);
  const [generalError, setGeneralError] = useState(false);
  const [deleteOk, setDeleteOk] = useState(false);
  const [deleteError, setDeleteError] = useState(false);
  const [createdOk, setCreatedOk] = useState(false);
  const [submitButton, setSubmitButton] = useState(true);
  // control image input
  const imageURLClass = classImage && URL.createObjectURL(classImage);

  const GetClassPics = async () => {
    axios
      .get("https://construcciones1backend.herokuapp.com/Classroompictures/")
      .then((res) => {
        setClassPics(res.data.fotos);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };
  useEffect(() => {GetClassPics();}, []);
  

  //   post classimages
  const handleChangeClassTitle = (e) => {
    const classTitle = e.target.value;
    setClassTitle(classTitle);
  };

  const handleClassPicture = (e) => {
    setClassImage(e.target.files[0]);
  };
  const handleRefresh = (e) => {
    window.location.reload(false);
  };

  const handleSubmitClassroom = async (e) => {
    try {
      e.preventDefault();
      const payload = new FormData();
      payload.append("title", classTitle);
      payload.append("image", classImage);
      const response = await axios.post(
        "https://construcciones1backend.herokuapp.com/Classroompictures/",

        payload
      );
      setClassAnswer(response.data.mensaje);
      setCreatedOk(true);
      GetClassPics();
      setSubmitButton(false);
      setTimeout(() => {
        setCreatedOk(false);
      }, 2000);
    } catch (error) {
      console.log(error.data);
      setGeneralError(true);
    }
  };
  const handleDelete = (id) => {
    axios
      .delete(`https://construcciones1backend.herokuapp.com/Classroompictures/${id}`)
      .then((res) => {
        setDeleteOk(true);
        GetClassPics();
        setTimeout(() => {
          setDeleteOk(false);
        }, 3000);
      })
      .catch((error) => {
        console.log(error.tipo);
        setDeleteError(true);
      });
  };
  return (
    <div>
      <h4 className="font-bold text-center mb-6"> GESTOR DE FOTOS CLASES</h4>
      {deleteError ? (
        <p className="bg-red-600 rounded-sm p-2 text-white text-center">
          error al borrar elemento
        </p>
      ) : deleteOk ? (
        <p className="bg-green-600 rounded-sm p-2 text-white text-center">
          elemento borrado con exito
        </p>
      ) : (
        <></>
      )}
      <div className="flex justify-center">
        <ul className="w-11/12 mb-6 overflow-x-scroll">
          {classPics.map((fotos) => (
            <li className="my-4 listsizemedia" key={fotos._id}>
              <div className="flex">
                <div className="flex w-11/12">
                  <img
                    className="w-1/12 rounded-sm "
                    src={fotos.image}
                    alt="Sunset in the mountains"
                  />
                  <p className="textyellow p-2 w-3/12"> {fotos.title}</p>
                  <p className="p-2 w-8/12 ">{fotos.description}</p>
                </div>
                <div className="w-1/12 ">
                  <button className="bgyellow font-bold rounded-sm p-1 w-full mb-2">
                    EDITAR
                  </button>
                  <button
                    onClick={() => handleDelete(fotos._id)}
                    className="bgyellow font-bold rounded-sm p-1 w-full"
                  >
                    BORRAR
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className=" flex justify-center">
        <form onSubmit={handleSubmitClassroom} className="w-1/2 widthmedia">
          <div className="bglayer1 p-1 rounded-sm">
            <div className="bglayer3 p-4 rounded-sm">
              <div className="flex flex-col">
                <div className="mb-2">
                  <div className=" ">
                    <input
                      value={classTitle}
                      onChange={handleChangeClassTitle}
                      type="text"
                      id="publicityTitle"
                      name="publicityTitle"
                      className=" w-full rounded-sm p-1 text-black"
                      placeholder="Titulo publicidad "
                      required
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <div className=" ">
                    <img src={imageURLClass} alt="" className="w-22" />
                    <input
                      onChange={handleClassPicture}
                      type="file"
                      id="publicityImage"
                      name="publicityImage"
                      className=" w-full rounded-sm p-1 text-black bg-white"
                      placeholder="Insertar Imagen"
                      required
                    />
                  </div>
                </div>

                <div className="">
                  {submitButton ? (
                    <button
                      type="submit"
                      className="w-full font-bold p-1 rounded-sm flex justify-center border-solid border-2 borderyellow bgyellow"
                    >
                      CARGAR FOTO
                    </button>
                  ) : (
                    <button
                      onClick={handleRefresh}
                      className="w-full font-bold p-1 rounded-sm flex justify-center border-solid border-2 borderyellow bgyellow"
                    >
                      CARGAR MAS INFORMACION
                    </button>
                  )}
                </div>
                {generalError ? (
                  <p className="text-red-300">
                    Un error ocurrio. Intentelo mas tarde.
                  </p>
                ) : createdOk ? (
                  <p className="text-green-300">Fotosubida con exito.</p>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
