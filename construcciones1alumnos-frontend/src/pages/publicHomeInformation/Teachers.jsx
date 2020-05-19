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
};