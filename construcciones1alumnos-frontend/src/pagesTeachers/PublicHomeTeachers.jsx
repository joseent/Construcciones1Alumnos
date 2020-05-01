// @ts-check
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";

export default function PublicHomeTeachers() {
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
      <div className="w-full bg-black p-6">
          {/* createSeminars */}
          
        {/* seminars */}
        <div className="w-4/5 flex justify-center">
          <div className=" text-center text-yellow-600 my-20">
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
