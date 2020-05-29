//@ts-check
import React, { useState } from "react";
import "../pages/Home.css";
import NavBar from "../components/general/navBar/NavBar.jsx";
import c1Cronograma from "../images/c1cronograma.png";
import TeachersCards from "../components/teachers/TeachersCards";
import { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  const [info, setInfo] = useState({});
  const [errorGeneral, setErrorGeneral] = useState(false);

  useEffect(() => {
    const GetForumList = async () => {
      axios
        .get("https://construcciones1backend.herokuapp.com/information/")
        .then((res) => {
          console.log(res.data);
          setInfo(res.data.informacion[0]);
        })
        .catch((error) => {
          console.log(error.data);
          setErrorGeneral(true);
        });
    };
    GetForumList();
  }, []);

  const handleOnClick = (id) => {
    console.log(id);
    history.push(`/info/${id}`);
  };

  return (
    <div className="bgColor">
      <NavBar />
      <div className="w-full flex flex-col items-center ">
        {/* teachers info */}
        <div className="w-4/5 flex justify-center">
          <TeachersCards />
        </div>
        <div className="w-4/5 text-yellow-600">
          <h4 className="text-center uppercase">{info.titulo}</h4>

          <p className="overflow-hidden h-24">{info.descripsion}</p>
          <br />
          <div className="flex justify-center items-center">
            <button
              onClick={() => handleOnClick(info._id)}
              className="bgyellow text-black font-bold p-2 my-6 rounded-sm m-1 "
            >
              LEER MAS
            </button>
          </div>
          <br />
          <div className="flex flex-col items-center">
            <h4 className="text-center">INFORMACION UTIL PARA EL CURSADO</h4>
            <br />
            <a href="https://drive.google.com/open?id=1HHuywoi2EteMiYhMDIMCv6n1QcxNfINe">
              <button className="p-1 bgyellow my-2 text-black rounded-md">DESCARGAR PROGRAMA</button>
            </a>
            <a href="https://drive.google.com/open?id=16NbiTQxcejydz_S1XfZyAAi3A41OxoPL">
              <button className="p-1 bgyellow my-2 text-black rounded-md">
                DESCARGAR BIBLIOGRAFIA
              </button>
            </a>
            <a href="https://drive.google.com/open?id=1bogRC10blDe_HyQzJ5KBPZw6Lzyf_r0R">
              <button className="p-1 bgyellow my-2 text-black rounded-md">
                DESCARGAR CRONOGRAMA
              </button>
            </a>
            {/* FOLLETOS */}
            <a href="https://drive.google.com/open?id=1YmFkzOIIZVqrZdKFqriCbPHnEr2dhi2S">
              <button className="p-1 bgyellow my-2 text-black rounded-md">
                DESCARGAR FOLLETOS COMERCIALES
              </button>
            </a>
            <a href="https://drive.google.com/open?id=1UyfLNJvRefH0K65Yp0ZO6wFnf336LNld">
              <button className="p-1 bgyellow my-2 text-black rounded-md">
                DESCARGAR GLOSARIO
              </button>
            </a>
              {/* UNIDADES TEMATICAS */}
              <h4 className="mt-4">CONTENIDO ANALITICO</h4>
              <p  className="mb-4">Precaución los siguiens link contienen contenido pesado, se recomienda descargar con wifi.</p>
            <a href="https://drive.google.com/open?id=1utZtdHFcgsX34Rk9vdT9Imrw7hIqUPnw">
              <button className="p-1 bgyellow my-2 text-black rounded-md">
                UNIDAD TEMATICA 1
              </button>
            </a>
            <a href="https://drive.google.com/open?id=1eGpdvPhEzia1R-aJFUNbcGVBMuORVcP5">
              <button className="p-1 bgyellow my-2 text-black rounded-md">
                UNIDAD TEMATICA 2
              </button>
            </a>
            <a href="https://drive.google.com/open?id=1pNB4LNdGB1Ru3zenVSJtz0WuO3m67SSZ">
              <button className="p-1 bgyellow my-2 text-black rounded-md">
                UNIDAD TEMATICA 3
              </button>
            </a>
            <a href="https://drive.google.com/open?id=1gjG_DM2aYcibBQb4OSwdMM3qtC-BEpWd">
              <button className="p-1 bgyellow my-2 text-black rounded-md">
                UNIDAD TEMATICA 4
              </button>
            </a>
            <a href="https://drive.google.com/open?id=1NB7Fq_xngvh_wVECO6PIO_rf-h7dD-uH">
              <button className="p-1 bgyellow my-2 text-black rounded-md">
                UNIDAD TEMATICA 5
              </button>
            </a>
            <a href="https://drive.google.com/open?id=1wTSyWxtJAi3X6kQn-4u8qNnEMUSV-wzf">
              <button className="p-1 bgyellow my-2 text-black rounded-md">
                UNIDAD TEMATICA 6
              </button>
            </a>
            <a href="https://drive.google.com/open?id=1hAwN9FCUAds7-obzvY4gIei1JUlIRJlR">
              <button className="p-1 bgyellow my-2 text-black rounded-md">
                UNIDAD TEMATICA 7
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
