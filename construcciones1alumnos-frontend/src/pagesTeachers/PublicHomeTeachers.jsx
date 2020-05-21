// @ts-check
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import axios from "axios";
import NavBarTeachers from "../components/general/navBar/NavBarTeachers";
import PublicHomeSeminars from "../components/publicHome/PublicHomeSeminars";
import PublicHomePublicity from "../components/publicHome/PublicHomePublicity";
import PublicHomeClassRoomPics from "../components/publicHome/PublicHomeClassRoomPics";
import SeminarsEdit from "../components/publicHomeEdit/SeminarsEdit";

export default function PublicHomeTeachers() {
  const history = useHistory();
 
  // publicityPost
  const [publicityTitle, setPublicityTitle] = useState("");
  const [publicitydescription, setPublicityDescription] = useState("");
  const [publicityImage, setPublicityImage] = useState("");
  const [publicityAnswer, setPublicityAnswer] = useState("");
  // classroomPost
  const [classTitle, setClassTitle] = useState("");
  const [classImage, setClassImage] = useState("");
  const [classAnswer, setClassAnswer] = useState("");

  // control image input
  const imageURLPublicity =
    publicityImage && URL.createObjectURL(publicityImage);
  const imageURLClass = classImage && URL.createObjectURL(classImage);

  //   post seminars
  
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
    try {
      e.preventDefault();
      const payload = new FormData();
      payload.append("title", publicityTitle);
      payload.append("description", publicitydescription);
      payload.append("image", publicityImage);
      const response = await axios.post(
        "http://localhost:3000/Publicity/",

        payload
      );
      setPublicityAnswer(response.data.mensaje);
    } catch (error) {
      console.log(error.data);
    }
  };
  //   post classimages
  const handleChangeClassTitle = (e) => {
    const classTitle = e.target.value;
    setClassTitle(classTitle);
  };

  const handleClassPicture = (e) => {
    setClassImage(e.target.files[0]);
  };

  const handleSubmitClassroom = async (e) => {
    try {
      e.preventDefault();
      const payload = new FormData();
      payload.append("title", classTitle);
      payload.append("image", classImage);
      const response = await axios.post(
        "http://localhost:3000/Classroompictures/",

        payload
      );
      setClassAnswer(response.data.mensaje);
    } catch (error) {
      console.log(error.data);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-black p-6">
        <NavBarTeachers />
        
        {/* seminars */}
        <SeminarsEdit/>
        {/* publicity */}
        <PublicHomePublicity />

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
                    <img src={imageURLPublicity} alt="" className="w-22" />
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
       <PublicHomeClassRoomPics/>
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
                    <img src={imageURLClass} alt="" className="w-22" />
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
