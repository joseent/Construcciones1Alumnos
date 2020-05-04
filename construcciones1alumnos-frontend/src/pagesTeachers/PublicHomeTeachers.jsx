// @ts-check
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import NavBarTeachers from "../components/general/navBar/NavBarTeachers";

export default function PublicHomeTeachers() {
  const history = useHistory();
  const [seminarList, setSeminarList] = useState([]);
  const [publicityList, setPublicityList] = useState([]);
  const [classPics, setClassPics] = useState([]);
  // seminarPost
  const [seminarTitle, setSeminarTitle] = useState("");
  const [seminardescription, setSeminarDescription] = useState("");
  const [seminarImage, setSeminarImage] = useState("");
  const [seminarAnswer, setSeminarAnswer] = useState("")
  // publicityPost
  const [publicityTitle, setPublicityTitle] = useState("");
  const [publicitydescription, setPublicityDescription] = useState("");
  const [publicityImage, setPublicityImage] = useState("");
  const [publicityAnswer, setPublicityAnswer] = useState("")
  // classroomPost
  const [classTitle, setClassTitle] = useState("");
  const [classdescription, setClassDescription] = useState("");
  const [classImage, setClassImage] = useState("");
  const [classAnswer, setClassAnswer] = useState("")
  

  useEffect(() => {
    const GetSeminarList = async () => {
      axios
        .get("http://localhost:3000/Seminars/")
        .then((res) => {
          console.log(res.data);
          setSeminarList(res.data.seminarios);
        })
        .catch((error) => {
          console.log(error.data);
        });
    };
    GetSeminarList();

    const GetPublicityList = async () => {
      axios
        .get("http://localhost:3000/Publicity/")
        .then((res) => {
          setPublicityList(res.data.publicidad);
        })
        .catch((error) => {
          console.log(error.data);
        });
    };
    GetPublicityList();

    const GetClassPics = async () => {
      axios
        .get("http://localhost:3000/Classroompictures/")
        .then((res) => {
          setClassPics(res.data.fotos);
        })
        .catch((error) => {
          console.log(error.data);
        });
    };
    GetClassPics();
  }, []);

  // control image input
  const imageURLSeminar = seminarImage && URL.createObjectURL(seminarImage)
  const imageURLPublicity = publicityImage && URL.createObjectURL(publicityImage)
  const imageURLClass = classImage && URL.createObjectURL(classImage)

  //   post seminars
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

  const handleSubmitSeminar = async (e) => {
    try{
      
      e.preventDefault();
      const payload = new FormData();
      payload.append("title", seminarTitle);
      payload.append("description", seminardescription);
      payload.append("image", seminarImage);
      const response = await axios.post(
        "http://localhost:3000/Seminars/", 
        
        payload
      )
      setSeminarAnswer(response.data.mensaje)
    }
      catch(error) {
        console.log(error.data);
      };
  };

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

  const handleSubmitPublicity = async (e) => {
    try{
      
      e.preventDefault();
      const payload = new FormData();
      payload.append("title", publicityTitle);
      payload.append("description", publicitydescription);
      payload.append("image", publicityImage);
      const response = await axios.post(
        "http://localhost:3000/Publicity/", 
        
        payload
      )
      setPublicityAnswer(response.data.mensaje)
    }
      catch(error) {
        console.log(error.data);
      };
  };
  //   post classimages
  const handleChangeClassTitle = (e) => {
    const classTitle = e.target.value;
    setClassTitle(classTitle);
  };

  const handleChangeClassDescription = (e) => {
    const classDescription = e.target.value;
    setClassDescription(classDescription);
  };

  const handleClassPicture = (e) => {
    setClassImage(e.target.files[0]);
    
  };

  const handleSubmitClassroom = async (e) => {
    try{
      
      e.preventDefault();
      const payload = new FormData();
      payload.append("title", classTitle);
      payload.append("description", classdescription);
      payload.append("image", classImage);
      const response = await axios.post(
        "http://localhost:3000/Classroompictures/", 
        
        payload
      )
      setClassAnswer(response.data.mensaje)
    }
      catch(error) {
        console.log(error.data);
      };
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-black p-6">
        <NavBarTeachers />
          {/* seminars */}
          <div className="w-4/5 flex justify-center">
          <div className="w-full text-center text-yellow-600 my-20">
            <p className="mb-6">SEMINARIOS</p>
            <ul className="flex flex-wrap w-full">
              {seminarList.map((seminars) => (
                <li className="p-2" key={seminars._id}>
                  <div className="max-w-sm min-w-sm rounded overflow-hidden shadow-lg bg-gray-900">
                    <img
                      className="w-full"
                      src={seminars.image}
                      alt="Sunset in the mountains"
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">
                        {seminars.title}
                      </div>
                      <p className="text-yellow-600 text-base">
                        {seminars.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* createSeminars */}
        <form onSubmit={handleSubmitSeminar}>
          <div>
            <div className="">
              <div className="flex flex-col">
                <div className="mb-3">
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
                <div className="mb-3">
                  <div className=" ">
                    <input
                      value={seminardescription}
                      onChange={handleChangeSeminarDescription}
                      type="text"
                      id="seminarDescription"
                      name="seminarDescription"
                      className=" w-full rounded-sm p-1 text-black"
                      placeholder="Descripcion seminario"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <div className=" ">
                    <img src={imageURLSeminar} alt="" className="w-22"/>
                    <input
                      onChange={handlePicture}
                      type="file"
                      id="seminarImage"
                      name="seminarImage"
                      className=" w-full rounded-sm p-1 text-black"
                      placeholder="Insertar Imagen"
                      required
                    />
                  </div>
                </div>

                <div className="p1 mb-3">
                  <button
                    type="submit"
                    className="w-full font-bold p-1 button hover:bg-yellow-600 hover:text-black rounded-sm flex justify-center mb-4 p-1 bg-black text-yellow-600 border-solid border-2 border-yellow-600 "
                  >
                    CARGAR SEMINARIOS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      
        {/* publicity */}
        
        <div className="w-4/5 flex justify-center">
          <div className=" text-center text-yellow-600 my-20">
            <p>PUBLICIDAD</p>
            <ul className="flex flex-wrap w-full">
              {publicityList.map((publicity) => (
                <li className="p-2" key={publicity._id}>
                  <div className="max-w-sm min-w-sm rounded overflow-hidden shadow-lg bg-gray-900">
                    <img
                      className="w-full"
                      src={publicity.image}
                      alt="Sunset in the mountains"
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">
                        {publicity.title}
                      </div>
                      <p className="text-yellow-600 text-base">
                        {publicity.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
         {/* createpUBLICITY */}
         <form onSubmit={handleSubmitPublicity}>
          <div>
            <div className="">
              <div className="flex flex-col">
                <div className="mb-3">
                  <div className=" ">
                    <input
                      value={publicityTitle}
                      onChange={handleChangePublicityTitle}
                      type="text"
                      id="seminarTitle"
                      name="seminarTitle"
                      className=" w-full rounded-sm p-1 text-black"
                      placeholder="Titulo Publicidad "
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <div className=" ">
                    <input
                      value={publicitydescription}
                      onChange={handleChangepublicityDescription}
                      type="text"
                      id="seminarDescription"
                      name="seminarDescription"
                      className=" w-full rounded-sm p-1 text-black"
                      placeholder="Descripcion Publicidad"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <div className=" ">
                    <img src={imageURLPublicity} alt="" className="w-22"/>
                    <input
                      onChange={handlePublicityPicture}
                      type="file"
                      id="seminarImage"
                      name="seminarImage"
                      className=" w-full rounded-sm p-1 text-black"
                      placeholder="Insertar Imagen"
                      required
                    />
                  </div>
                </div>

                <div className="p1 mb-3">
                  <button
                    type="submit"
                    className="w-full font-bold p-1 button hover:bg-yellow-600 hover:text-black rounded-sm flex justify-center mb-4 p-1 bg-black text-yellow-600 border-solid border-2 border-yellow-600 "
                  >
                    CARGAR PUBLICIDAD
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      
        {/* pictures */}
        <div className="w-4/5 flex justify-center">
          <div className="w-4/5 text-center text-yellow-600 my-20">
            <p>CARROUSEL</p>
            <Carousel>
              {classPics.map((fotos) => (
                <div key={fotos._id}>
                  <img src={fotos.image} />
                  <p className="legend">{fotos.title}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
         {/* createClassRomPicture */}
         <form onSubmit={handleSubmitClassroom}>
          <div>
            <div className="">
              <div className="flex flex-col">
                <div className="mb-3">
                  <div className=" ">
                    <input
                      value={classTitle}
                      onChange={handleChangeClassTitle}
                      type="text"
                      id="seminarTitle"
                      name="seminarTitle"
                      className=" w-full rounded-sm p-1 text-black"
                      placeholder="Titulo foto "
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <div className=" ">
                    <input
                      value={classdescription}
                      onChange={handleChangeClassDescription}
                      type="text"
                      id="seminarDescription"
                      name="seminarDescription"
                      className=" w-full rounded-sm p-1 text-black"
                      placeholder="Descripcion foto"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <div className=" ">
                    <img src={imageURLClass} alt="" className="w-22"/>
                    <input
                      onChange={handleClassPicture}
                      type="file"
                      id="seminarImage"
                      name="seminarImage"
                      className=" w-full rounded-sm p-1 text-black"
                      placeholder="Insertar Imagen"
                      required
                    />
                  </div>
                </div>

                <div className="p1 mb-3">
                  <button
                    type="submit"
                    className="w-full font-bold p-1 button hover:bg-yellow-600 hover:text-black rounded-sm flex justify-center mb-4 p-1 bg-black text-yellow-600 border-solid border-2 border-yellow-600 "
                  >
                    CARGAR FOTOS
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
