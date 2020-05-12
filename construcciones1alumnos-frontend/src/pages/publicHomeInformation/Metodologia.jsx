// @ts-check
import React from 'react'
import metodologia1 from "../../images/metodologia1.jpg";
import metodologia2 from "../../images/metodologia2.jpg";
import metodologia3 from "../../images/metodologia3.jpg";
import metodologia4 from "../../images/metodologia4.jpg";
import metodologia5 from "../../images/metodologia5.jpg";
import metodologia6 from "../../images/metodologia6.jpg";
import metodologia7 from "../../images/metodologia7.jpg";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
export default function Metodologia() {
    return (
        <div className="w-4/5 flex justify-center">
        <div className="w-4/5 text-center text-yellow-600 my-20">
          <Carousel>
            <div>
              <img src={metodologia1} />
            </div>
            <div>
              <img src={metodologia2} />
            </div>
            <div>
              <img src={metodologia3} />
            </div>
            <div>
              <img src={metodologia4} />
            </div>
            <div>
              <img src={metodologia5} />
            </div>
            <div>
              <img src={metodologia6} />
            </div>
            <div>
              <img src={metodologia7} />
            </div>
          </Carousel>
        </div>
      </div>
    )
}
