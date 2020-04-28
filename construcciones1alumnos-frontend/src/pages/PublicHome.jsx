// @ts-check
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BottomBar from "../components/general/bottomBar/BottomBar";
import c1Logo from "../images/c1Logo.jpg";
import bgegipt from "../images/bgegipt.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";

export default function PublicHome() {
  const [seminarList, setSeminarList] = useState([]);
  const [publicityList, setPublicityList] = useState([]);
  const [classPics, setClassPics] = useState([]);

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

  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-yellow-600 p-6">
        <p className="text-3xl text-center font-bold">CONSTRUCCIONES I</p>
        <div className="text-center">
          <span>No estas registrado?</span>
          <Router>
            <Link to="/register" className="font-bold tracking-tight">
              REGISTRATE AQUI!
            </Link>
          </Router>
        </div>
      </div>
      {/* FONDO */}
      <div className="w-full flex justify-center items-center">
        <img
          className="Bgegipt bg-local w-full relative"
          src={bgegipt}
          alt="Bgegipt"
        />
        <div className="absolute w-full p-6 flex justify-center">
          <img className="rounded-full w-3/12 mb-5" src={c1Logo} alt="" />
        </div>
      </div>
      {/* CONTENT*/}
      <div className="flex flex-col items-center divide-y divide-yellow-600">
        {/* general info */}
        <div className="w-4/5 flex justify-center">
          <div className="w-4/5 text-center text-yellow-600  my-20">
            <p>INFO FACUTLAD</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              ullam maxime, nobis et animi quis sit quia eveniet distinctio
              dignissimos? Est maiores provident aspernatur nobis eaque,
              cupiditate ex quia quos?
            </p>
          </div>
        </div>
        {/* catedra info */}
        <div className="w-4/5 flex justify-center">
          <div className="w-4/5 text-center text-yellow-600 my-20">
            <p>INFO CATEDRA</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              ullam maxime, nobis et animi quis sit quia eveniet distinctio
              dignissimos? Est maiores provident aspernatur nobis eaque,
              cupiditate ex quia quos?
            </p>
          </div>
        </div>
        {/* teachers info */}
        <div className="w-4/5 flex justify-center">
          <div className="w-full my-20">
            <p>INFO DOCENTES</p>
            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <img src={c1Logo} alt="" className="rounded-full w-20 " />
                <span className="text-center text-yellow-600 mt-1">
                  nombres
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img src={c1Logo} alt="" className="rounded-full w-20 " />
                <span className="text-center text-yellow-600 mt-1">
                  nombres
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img src={c1Logo} alt="" className="rounded-full w-20 " />
                <span className="text-center text-yellow-600 mt-1">
                  nombres
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img src={c1Logo} alt="" className="rounded-full w-20 " />
                <span className="text-center text-yellow-600 mt-1">
                  nombres
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img src={c1Logo} alt="" className="rounded-full w-20 " />
                <span className="text-center text-yellow-600 mt-1">
                  nombres
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img src={c1Logo} alt="" className="rounded-full w-20 " />
                <span className="text-center text-yellow-600 mt-1">
                  nombres
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img src={c1Logo} alt="" className="rounded-full w-20 " />
                <span className="text-center text-yellow-600 mt-1">
                  nombres
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img src={c1Logo} alt="" className="rounded-full w-20 " />
                <span className="text-center text-yellow-600 mt-1">
                  nombres
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* seminars */}
        <div className="w-4/5 flex justify-center">
          <div className=" text-center text-yellow-600 my-20">
            <p className="mb-6">SEMINARIOS</p>
            <ul className="flex flex-wrap w-full">
              {seminarList.map((seminars) => (
                <li className="p-2">
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
                <li className="p-2">
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

              <div>
                <img src={fotos.image} />
            <p className="legend">{fotos.title}</p>
              </div>
))}
            </Carousel>
          </div>
        </div>
        {/* FONDO */}s
        <div className="w-full flex justify-center items-center">
          <img
            className="Bgegipt bg-local w-full relative"
            src={bgegipt}
            alt="Bgegipt"
          />
        </div>
      </div>
      <BottomBar />
    </div>
  );
}



