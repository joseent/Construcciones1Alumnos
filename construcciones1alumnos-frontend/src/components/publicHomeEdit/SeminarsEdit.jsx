// @ts-check
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SeminarsEdit() {
  // seminarPost
  const [seminarTitle, setSeminarTitle] = useState("");
  const [seminardescription, setSeminarDescription] = useState("");
  const [seminarImage, setSeminarImage] = useState("");
  const [seminarAnswer, setSeminarAnswer] = useState("");
  const [seminarList, setSeminarList] = useState([]);
  const [generalError, setGeneralError] = useState(false);
  const [deleteOk, setDeleteOk] = useState(false);
  const [deleteError, setDeleteError] = useState(false);
  const [createdOk, setCreatedOk] = useState(false);
  const [submitButton, setSubmitButton] = useState(true)
  // control image input
  const imageURLSeminar = seminarImage && URL.createObjectURL(seminarImage);

  // get seminar list
  const GetSeminarList = async () => {
    axios
      .get("https://construcciones1backend.herokuapp.com/Seminars/")
      .then((res) => {
        console.log(res.data);
        setSeminarList(res.data.seminarios);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };
  useEffect(() => {
    GetSeminarList();
  }, []);

  //post seminars
  const handleChangeSeminarTitle = (e) => {
    const seminarTitle = e.target.value;
    setSeminarTitle(seminarTitle);
  };

  const handleChangeSeminarDescription = (e) => {
    const seminarDescription = e.target.value;
    setSeminarDescription(seminarDescription);
  };

  const handlePicture = (e) => {
    setSeminarImage(e.target.files[0]);
  };
const handleRefresh = (e) => {
  window.location.reload(false);
}
  const handleSubmitSeminar = async (e) => {
    try {
      e.preventDefault();
      const payload = new FormData();
      payload.append("title", seminarTitle);
      payload.append("description", seminardescription);
      payload.append("image", seminarImage);
      const response = await axios.post(
        "https://construcciones1backend.herokuapp.com/Seminars/",

        payload
      );
      setSeminarAnswer(response.data.mensaje);
      setCreatedOk(true);
      GetSeminarList();
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
      .delete(`https://construcciones1backend.herokuapp.com/Seminars/${id}`)
      .then((res) => {
        setDeleteOk(true);
        GetSeminarList();
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
      <h4 className="font-bold text-center mb-6"> GESTOR DE SEMINARIOS</h4>
      {deleteError ? (
        <p className="bg-red-600 rounded-sm p-2 text-white text-center">error al borrar elemento</p>
      ) : deleteOk ? (
        <p className="bg-green-600 rounded-sm p-2 text-white text-center">elemento borrado con exito</p>
      ) : (
        <></>
      )}
      <div className="flex justify-center">
        <ul className="w-11/12 mb-6">
          {seminarList.map((seminars) => (
            <li className="my-4" key={seminars._id}>
              <div className="flex">
                <div className="flex w-11/12">
                  <img
                    className="w-1/12 rounded-sm "
                    src={seminars.image}
                    alt="Sunset in the mountains"
                  />
                  <p className="textyellow p-2 w-3/12"> {seminars.title}</p>
                  <p className="p-2 w-8/12 ">{seminars.description}</p>
                </div>
                <div className="w-1/12 ">
                  <button className="bgyellow font-bold rounded-sm p-1 w-full mb-2">
                    EDITAR
                  </button>
                  <button
                    onClick={() => handleDelete(seminars._id)}
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
        <form onSubmit={handleSubmitSeminar} className="w-1/2">
          <div className="bglayer1 p-1 rounded-sm">
            <div className="bglayer3 p-4 rounded-sm">
              <div className="flex flex-col">
                <div className="mb-2">
                  <div className=" ">
                    <input
                      value={seminarTitle}
                      onChange={handleChangeSeminarTitle}
                      type="text"
                      id="seminarTitle"
                      name="seminarTitle"
                      className=" w-full rounded-sm p-1 text-black"
                      placeholder="Titulo Seminario "
                      required
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <div className=" ">
                    <textarea
                      value={seminardescription}
                      onChange={handleChangeSeminarDescription}
                      id="seminarDescription"
                      name="seminarDescription"
                      className=" w-full rounded-sm p-1 text-black"
                      placeholder="Descripcion seminario"
                      required
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <div className=" ">
                    <img src={imageURLSeminar} alt="" className="w-22" />
                    <input
                      onChange={handlePicture}
                      type="file"
                      id="seminarImage"
                      name="seminarImage"
                      className=" w-full rounded-sm p-1 text-black bg-white"
                      placeholder="Insertar Imagen"
                      required
                    />
                  </div>
                </div>

                <div className="">
                  {submitButton ? <button
                    type="submit"
                    className="w-full font-bold p-1 rounded-sm flex justify-center border-solid border-2 borderyellow bgyellow"
                  >
                    CARGAR SEMINARIOS
                  </button> : <button onClick={handleRefresh} className="w-full font-bold p-1 rounded-sm flex justify-center border-solid border-2 borderyellow bgyellow">CARGAR OTRA INFORMACION</button>}
                  
                </div>
                {generalError ? (
                  <p className="text-red-300">
                    Un error ocurrio. Intentelo mas tarde.
                  </p>
                ) : (
                  createdOk ? <p className="text-green-300">seminario creado con exito</p> : <></> 
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
