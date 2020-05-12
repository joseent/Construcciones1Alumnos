// @ts-check
import React from "react";

import teacher1 from "../../images/teachers/toppa.png";
import teacher2 from "../../images/teachers/sosa.png";
import teacher3 from "../../images/teachers/latina.png";
import teacher4 from "../../images/teachers/alderete.png";
import teacher5 from "../../images/teachers/arias.png";
import teacher6 from "../../images/teachers/ferreyra.png";
import teacher7 from "../../images/teachers/legorburu.png";
import teacher8 from "../../images/teachers/saez.png";
import group1 from "../../images/teachers/group1.png"
import group2 from "../../images/teachers/group2.png"

import "./Teachers.css"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Teachers() {
  return (
    <div className="w-full flex flex-col justify-center">
         <h3 className="my-20 texttitles text-center">DOCENTES</h3>
      
      <Carousel className="w-full carrouselindividual">
        <div>
          <img className="w-full" src={teacher8} />
        </div>
        <div>
          <img className="w-full" src={teacher7} />
        </div>
        <div>
          <img className="w-full" src={teacher6} />
        </div>
        <div>
          <img className="w-full" src={teacher5} />
        </div>
        <div>
          <img className="w-full" src={teacher4} />
        </div>
        <div>
          <img className="w-full" src={teacher3} />
        </div>
        <div>
          <img className="w-full" src={teacher2} />
        </div>
        <div>
          <img className="w-full" src={teacher1} />
        </div>
      </Carousel>
      <Carousel className="w-full carrouselgroup">
        <div>
          <img className="w-full" src={group1} />
        </div>
        <div>
          <img className="w-full" src={group2} />
        </div>
      </Carousel>
    </div>
  );


}
{/* <div className="w-full my-20">
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <img src={teacher8} alt="" className="rounded-full teachersImage" />
            <span className="text-center text-yellow-600 mt-1">
              Arq. VANESA SAEZ
            </span>
            <span className="text-center text-yellow-600 mt-1">
              Auxiliar Graduado
            </span>
          </div>
          <div className="flex flex-col items-center">
            <img src={teacher7} alt="" className="rounded-full teachersImage" />
            <span className="text-center text-yellow-600 mt-1">
              Arq. MARIANA LEGORBURU
            </span>
            <span className="text-center text-yellow-600 mt-1">
              Auxiliar Graduado
            </span>
          </div>
          <div className="flex flex-col items-center">
            <img src={teacher6} alt="" className="rounded-full teachersImage" />
            <span className="text-center text-yellow-600 mt-1">
              Arq. IRENE FERREYRA
            </span>
            <span className="text-center text-yellow-600 mt-1">J.T.P</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={teacher5} alt="" className="rounded-full teachersImage" />
            <span className="text-center text-yellow-600 mt-1">
              Ing. ELIZABETH ARIAS
            </span>
            <span className="text-center text-yellow-600 mt-1"></span>
            <span className="text-center text-yellow-600 mt-1">
              Profesora Adjunta
            </span>
            <span className="text-center text-yellow-600 mt-1"></span>
          </div>
          <div className="flex flex-col items-center">
            <img src={teacher4} alt="" className="rounded-full teachersImage" />
            <span className="text-center text-yellow-600 mt-1">
              Ing. CARLOS ALDERETE
            </span>
            <span className="text-center text-yellow-600 mt-1">
              Profesor Adjunto
            </span>
          </div>
          <div className="flex flex-col items-center">
            <img src={teacher3} alt="" className="rounded-full teachersImage" />
            <span className="text-center text-yellow-600 mt-1">
              Arq. STELLA LATINA
            </span>
            <span className="text-center text-yellow-600 mt-1">
              Profesora Adjunta
            </span>
          </div>
          <div className="flex flex-col items-center">
            <img src={teacher2} alt="" className="rounded-full teachersImage" />
            <span className="text-center text-yellow-600 mt-1">
              MSc. Arq. MIRTA SOSA
            </span>
            <span className="text-center text-yellow-600 mt-1">
              Profesora Asosiada
            </span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={teacher1}
              alt=""
              className="rounded-full teachersImage "
            />
            <span className="text-center text-yellow-600 mt-1">
              MSc. Arq. LUCIA TOPPA
            </span>
            <span className="text-center text-yellow-600 mt-1">
              Profesora Titular
            </span>
          </div>
        </div>
      </div> */}