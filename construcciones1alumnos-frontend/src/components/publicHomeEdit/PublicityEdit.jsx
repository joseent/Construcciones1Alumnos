// @ts-check
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PublicityEdit() {
  // publicityPost
  const [publicityTitle, setPublicityTitle] = useState("");
  const [publicitydescription, setPublicityDescription] = useState("");
  const [publicityImage, setPublicityImage] = useState("");
  const [publicityAnswer, setPublicityAnswer] = useState("");
  const [publicityList, setPublicityList] = useState([]);
  const [generalError, setGeneralError] = useState(false);
  const [deleteOk, setDeleteOk] = useState(false);
  const [deleteError, setDeleteError] = useState(false);
  const [createdOk, setCreatedOk] = useState(false);
  const [submitButton, setSubmitButton] = useState(true);
  // control image input
  const imageURLPublicity =
    publicityImage && URL.createObjectURL(publicityImage);

  // get publicity list
  const GetPublicityList = async () => {
    axios
      .get("https://construcciones1backend.herokuapp.com/Publicity/")
      .then((res) => {
        setPublicityList(res.data.publicidad);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };
  useEffect(() => {
    GetPublicityList();
  }, []);

  //   post publicity
  const handleChangePublicityTitle = (e) => {
    const publicityTitle = e.target.value;
    setPublicityTitle(publicityTitle);
  };

  const handleChangepublicityDescription = (e) => {
    const publicityDescription = e.target.value;
    setPublicityDescription(publicityDescription);
  };

  const handlePublicityPicture = (e) => {
    setPublicityImage(e.target.files[0]);
  };
  const handleRefresh = (e) => {
    window.location.reload(false);
  }
  const handleSubmitPublicity = async (e) => {
    try {
      e.preventDefault();
      const payload = new FormData();
      payload.append("title", publicityTitle);
      payload.append("description", publicitydescription);
      payload.append("image", publicityImage);
      const response = await axios.post(
        "https://construcciones1backend.herokuapp.com/Publicity/",

        payload
      );
      setPublicityAnswer(response.data.mensaje);
      setCreatedOk(true);
      GetPublicityList();
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
      .delete(`https://construcciones1backend.herokuapp.com/Publicity/${id}`)
      .then((res) => {
        setDeleteOk(true);
        GetPublicityList();
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
      <h4 className="font-bold text-center mb-6"> GESTOR DE PUBLICIDAD</h4>
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
        <ul className="w-10/12 mb-6 overflow-x-scroll">
          {publicityList.map((publicity) => (
            <li className="my-4" key={publicity._id}>
              <div className="flex">
                <div className="flex w-11/12">
                  <img
                    className="w-1/12 rounded-sm "
                    src={publicity.image}
                    alt="Sunset in the mountains"
                  />
                  <p className="textyellow p-2 w-3/12"> {publicity.title}</p>
                  <p className="p-2 w-8/12 ">{publicity.description}</p>
                </div>
                <div className="w-1/12 ">
                  <button className="bgyellow font-bold rounded-sm p-1 w-full mb-2">
                    EDITAR
                  </button>
                  <button
                    onClick={() => handleDelete(publicity._id)}
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
        <form onSubmit={handleSubmitPublicity} className="w-1/2 widthmedia">
          <div className="bglayer1 p-1 rounded-sm">
            <div className="bglayer3 p-4 rounded-sm">
              <div className="flex flex-col">
                <div className="mb-2">
                  <div className=" ">
                    <input
                      value={publicityTitle}
                      onChange={handleChangePublicityTitle}
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
                    <textarea
                      value={publicitydescription}
                      onChange={handleChangepublicityDescription}
                      id="publicityDescription"
                      name="publicityDescription"
                      className=" w-full rounded-sm p-1 text-black"
                      placeholder="Descripcion publicidad"
                      required
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <div className=" ">
                    <img src={imageURLPublicity} alt="" className="w-22" />
                    <input
                      onChange={handlePublicityPicture}
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
                      CARGAR PUBLICIDAD
                    </button>
                  ) : (
                    <button
                      onClick={handleRefresh}
                      className="w-full font-bold p-1 rounded-sm flex justify-center border-solid border-2 borderyellow bgyellow"
                    >
                      CARGAR OTRA INFORMACION
                    </button>
                  )}
                </div>
                {generalError ? (
                  <p className="text-red-300">
                    Un error ocurrio. Intentelo mas tarde.
                  </p>
                ) : createdOk ? (
                  <p className="text-green-300">Publicidad creada con exito.</p>
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
