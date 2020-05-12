// @ts-check
import React from "react";
import areatecnica from "../../images/areatecnica.jpg";
import objetivogeneral from "../../images/objetivosgenerales.jpg";
import mapaconceptual1 from "../../images/mapaconceptual1.jpg";
import mapaconceptual2 from "../../images/mapaconceptual2.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Catedra() {
  return(
// info catedra
<div className="w-4/5 flex justify-center">
   <div className="w-4/5 text-center text-yellow-600 my-20">
     <p>INFO CATEDRA</p>
     <Carousel>
       <div>
         <img src={areatecnica} />
         <p className="legend">area tecnica</p>
       </div>
       <div>
         <img src={objetivogeneral} />
         <p className="legend">objetivos generales</p>
       </div>
       <div>
         <img src={mapaconceptual1} />
         <p className="legend">mapa conceptual</p>
       </div>
       <div>
         <img src={mapaconceptual2} />
         <p className="legend">mapa conceptual</p>
       </div>
     </Carousel>
     <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
       ullam maxime, nobis et animi quis sit quia eveniet distinctio
       dignissimos? Est maiores provident aspernatur nobis eaque,
       cupiditate ex quia quos?
     </p>
   </div>
 </div>)
}
