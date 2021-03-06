// @ts-check
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Seminars() {
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
        <div className="w-10/12 text-center my-20 bglayer1 rounded-lg">
          <h4 className="mb-6 mt-8  text-2xl font-bold">SEMINARIOS</h4>
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
        </div>
      </div>
    );
}
