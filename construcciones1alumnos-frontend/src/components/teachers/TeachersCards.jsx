// @ts-check
import React from "react";
import teacher1 from "../../images/teachers/toppa.jpg";
import teacher2 from "../../images/teachers/sosa.jpg";
import teacher3 from "../../images/teachers/latina.jpg";
import teacher4 from "../../images/teachers/alderete.jpg";
import teacher5 from "../../images/teachers/arias.jpg";
import teacher6 from "../../images/teachers/ferreyra.jpg";
import teacher7 from "../../images/teachers/legorburu.jpg";
import teacher8 from "../../images/teachers/saez.jpg";
import { useState } from "react";

export default function TeachersCards() {
  const [cards, setCards] = useState(false);
  const toggleCards = () => setCards((state) => !state);

  return (
    <div className="w-full">
      <h4 className="text-center">COMISIONES</h4>
      <div className="hiddencards w-full flex justify-center">
        <button onClick={toggleCards} className="bgyellow font-bold p-2 my-6 rounded-sm m-1 ">
          VER COMISIONES
        </button>
      </div>
      {cards ? 
      (
      <div className="w-full flex flex-wrap my-6">
        {/* COMISION1*/}
        <div className="mediafullwidth w-2/12 m-1 p-1 rounded-sm bglayer1">
          <div className="bglayer2 h-full flex flex-col items-center">
            <span className="text-center textyellow mt-1">C 1</span>
            <img src={teacher3} alt="" className="rounded-full w-20 " />
            <span className="text-center textyellow mt-1">Arq.</span>
            <span className="text-center textyellow mt-1">STELLA LATINA</span>
          </div>
        </div>

        {/* C2 */}
        <div className="mediafullwidth w-2/12 m-1 p-1 rounded-sm bglayer1">
          <div className="bglayer2 h-full flex flex-col items-center">
            <span className="text-center textyellow mt-1">C 2</span>
            <img src={teacher4} alt="" className="rounded-full w-20 " />
            <span className="text-center textyellow mt-1">Ing.</span>
            <span className="text-center textyellow mt-1">CARLOS ALDERETE</span>
          </div>
        </div>

        {/* C3 */}
        <div className="mediafullwidth w-2/12 m-1 p-1 rounded-sm bglayer1">
          <div className="bglayer2 h-full flex flex-col items-center">
            <span className="text-center textyellow mt-1">C 3</span>
            <img src={teacher2} alt="" className="rounded-full w-20 " />
            <span className="text-center textyellow mt-1">MSc. Arq.</span>
            <span className="text-center textyellow mt-1">MIRTA. E. SOSA</span>
          </div>
        </div>
        {/* C4*/}
        <div className="mediafullwidth w-2/12 m-1 p-1 rounded-sm bglayer1">
          <div className="bglayer2 h-full flex flex-col items-center">
            <span className="text-center textyellow mt-1">C 4</span>
            <img src={teacher5} alt="" className="rounded-full w-20 " />
            <span className="text-center textyellow mt-1">Ing.</span>
            <span className="text-center textyellow mt-1">ELIZABETH ARIAS</span>
          </div>
        </div>
        {/* C5 */}
        <div className="mediafullwidth w-2/12 m-1 p-1 rounded-sm bglayer1">
          <div className="bglayer2 h-full flex flex-col items-center">
            <span className="text-center textyellow mt-1">C 5</span>
            <img src={teacher6} alt="" className="rounded-full w-20 " />
            <span className="text-center textyellow mt-1">Arq.</span>
            <span className="text-center textyellow mt-1">IRENE FERREYRA</span>
          </div>
        </div>
        {/* C6 */}
        <div className="mediafullwidth w-2/12 m-1 p-1 rounded-sm bglayer1">
          <div className="bglayer2 h-full flex flex-col items-center">
            <span className="text-center textyellow mt-1">C 6</span>
            <img src={teacher7} alt="" className="rounded-full w-20 " />
            <span className="text-center textyellow mt-1">Arq.</span>
            <span className="text-center textyellow mt-1">
              MARIANA LEGORBURU
            </span>
          </div>
        </div>
        {/* C7 */}
        <div className="mediafullwidth w-2/12 m-1 p-1 rounded-sm bglayer1">
          <div className="bglayer2 h-full flex flex-col items-center">
            <span className="text-center textyellow mt-1">C 7</span>
            <img src={teacher8} alt="" className="rounded-full w-20 " />
            <span className="text-center textyellow mt-1">Arq.</span>
            <span className="text-center textyellow mt-1">VANESA SAEZ</span>
          </div>
        </div>
        {/* C8 */}
        <div className="mediafullwidth w-2/12 m-1 p-1 rounded-sm bglayer1">
          <div className="bglayer2 h-full flex flex-col items-center">
            <span className="text-center textyellow mt-1">C 8</span>
            <img src={teacher1} alt="" className="rounded-full w-20 " />
            <span className="text-center textyellow mt-1">otro docente</span>
          </div>
        </div>
      </div>
      ) : ("")}
    </div>
  );
}
