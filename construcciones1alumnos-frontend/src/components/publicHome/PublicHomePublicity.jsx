// @ts-check
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PublicHomePublicity() {
  const [publicityList, setPublicityList] = useState([]);

  useEffect(() => {
    const GetPublicityList = async () => {
      axios
        .get("https://construcciones1backend.herokuapp.com/Publicity/")
        .then((res) => {
          setPublicityList(res.data.publicidad);
        })
        .catch((error) => {
          console.log(error.data);
        });
    };
    GetPublicityList();
  }, []);
  return (
    <div className="w-full flex justify-center">
      <div className="w-full text-center my-20 bglayer1 rounded-lg">
        <h3 className="mt-8">PUBLICIDAD</h3>
        <ul className="flex flex-wrap w-full">
          {publicityList.map((publicity) => (
            <li className="p-4 w-1/2" key={publicity._id}>
              <div className="max-w-sm min-w-sm rounded overflow-hidden bglayer2 shadow-lg">
                <img
                  className="w-full"
                  src={publicity.image}
                  alt="Sunset in the mountains"
                />
                <div className="px-4 py-4">
                  <div className="font-bold mb-2">
                    <h4>{publicity.title}</h4>
                  </div>
                  <p>{publicity.description}</p>
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
