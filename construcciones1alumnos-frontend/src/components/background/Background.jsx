//@ts-check
import React from "react";
import "../background/Background.css";
import bgegipt from '../background/bgegipt.jpg';

export default function Background() {
 
  return (
    <div>
        <img className="bg" src={bgegipt} alt="Bgegipt" />;
    </div>
  );
}
