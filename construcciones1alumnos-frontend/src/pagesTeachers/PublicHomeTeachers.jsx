// @ts-check
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import NavBarTeachers from "../components/general/navBar/NavBarTeachers";

export default function PublicHomeTeachers() {
  const history = useHistory();
  const [seminarList, setSeminarList] = useState([]);
  const [publicityList, setPublicityList] = useState([]);
  const [classPics, setClassPics] = useState([]);
  const [seminarTitle, setSeminarTitle] = useState("");
  const [seminardescription, setSeminarDescription] = useState("");
  const [seminarimage, setSeminarImage] = useState("");

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

  //   post seminars
  const handleChangeSeminarTitle = (e) => {
    const seminarTitle = e.target.value;
    setSeminarTitle(seminarTitle);
  };

  const handleChangeSeminarDescription = (e) => {
    const seminarDescription = e.target.value;
    setSeminarDescription(seminarDescription);
  };

  const handleSubmitSeminar = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/Seminars/", {
        title: seminarTitle,
        description: seminardescription,
      })
      .then((res) => {
        console.log(seminarTitle);
        console.log(seminardescription);

        // localStorage.setItem('idusuario', idd)
        history.push("/publichometeachers");
        // const timer = setTimeout(() => {

        // },1000)
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  //   post publicity
  //   post classimages

  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-black p-6">
        <NavBarTeachers />
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
      </div>
    </div>
  );
}
