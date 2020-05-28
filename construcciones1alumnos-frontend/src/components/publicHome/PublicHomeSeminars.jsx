// @ts-check
import React, { useEffect, useState } from "react";
import axios from "axios";

import "../../pages/PublicHome.css"

export default function PublicHomeSeminars() {
  const [seminarList, setSeminarList] = useState([]);

  useEffect(() => {
    const GetSeminarList = async () => {
      axios
        .get("https://construcciones1backend.herokuapp.com/Seminars/")
        .then((res) => {
          console.log(res.data);
          setSeminarList(res.data.seminarios);
        })
        .catch((error) => {
          console.log(error.data);
        });
    };
    GetSeminarList();
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full text-center my-20 bglayer1 rounded-lg">
        <h3 className="mb-6 mt-8">SEMINARIOS</h3>
        <ul className="seminarsulmedia flex flex-wrap w-full">
          {seminarList.map((seminars) => (
            <li className="seminarslimedia p-4 w-1/2" key={seminars._id}>
              <div className="max-w-sm min-w-sm rounded overflow-hidden bglayer2 shadow-lg">
                <img
                  className="w-full"
                  src={seminars.image}
                  alt="Sunset in the mountains"
                />
                <div className="px-4 py-4">
                  <div className="font-bold text-l mb-2">
                  <h4>  {seminars.title}</h4>
                    </div>
                  <p>
                    {seminars.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button className="bgyellow  shadow-lg seemorebutton rounded-md mt-8 mb-8 w-1/5 p-2 font-bold">VER MAS</button>
      </div>
    </div>
  );
}
