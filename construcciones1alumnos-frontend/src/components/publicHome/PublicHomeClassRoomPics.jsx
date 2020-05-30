// @ts-check
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';

export default function PublicHomeClassRoomPics() {
  const [classPics, setClassPics] = useState([]);

  useEffect(() => {
    const GetClassPics = async () => {
      axios
        .get("https://construcciones1backend.herokuapp.com/Classroompictures/")
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
             <div className="w-full flex justify-center">
          <div className="w-full text-center my-20 bglayer1 rounded-lg">
            <h4 className="text-2xl font-bold">IMAGENES</h4>
            <Carousel>
              {classPics.map((fotos) => (
                <div key={fotos._id}>
                  <img className="" src={fotos.image} />
                  <p className="legend">{fotos.title}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
    )
}
