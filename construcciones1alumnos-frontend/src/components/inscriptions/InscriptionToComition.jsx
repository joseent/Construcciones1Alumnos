// @ts-check
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function InscriptionToComition() {
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userDNI, setuserDNI] = useState("");
  const [userLibreta, setUserLibreta] = useState("");
  const [userMail, setUserMail] = useState("");
  const [correctInscription1, setCorrectInscription1] = useState(false);
  const [correctInscription2, setCorrectInscription2] = useState(false);
  const [correctInscription3, setCorrectInscription3] = useState(false);
  const [correctInscription4, setCorrectInscription4] = useState(false);
  const [correctInscription5, setCorrectInscription5] = useState(false);
  const [correctInscription6, setCorrectInscription6] = useState(false);
  const [correctInscription7, setCorrectInscription7] = useState(false);
  const [inscripted, setInscripted] = useState(false);
  const [comition, setComition] = useState("");

  useEffect(() => {
    const id = window.localStorage.getItem("idusuario");
    console.log(id);

    const getUserBiId = (e) => {
      axios
        .get(`http://localhost:3000/users/${id}`)
        .then((res) => {
          setUserName(res.data.usuario.nombre);
          setUserLastName(res.data.usuario.apellido);
          setuserDNI(res.data.usuario.dni);
          setUserLibreta(res.data.usuario.libreta);
          setUserMail(res.data.usuario.mail);
          setInscripted(res.data.usuario.inscripto);
          setComition(res.data.usuario.comision);
        })
        .catch((error) => {
          console.log(error.data);
        });
    };
    getUserBiId();
  }, []);

  // COMITION1
  const handleComition1 = () => {
    const id = window.localStorage.getItem("idusuario");
    axios
      .post("http://localhost:3000/Comition1", {
        nombre: userName,
        apellido: userLastName,
        dni: userDNI,
        libreta: userLibreta,
        mail: userMail,
      })
      .then((res) => {
        setCorrectInscription1(true);
      })
      .catch((error) => {
        console.log(error.tipo);
      });

    axios.put(`http://localhost:3000/users/${id}`, {
      comision: "COMISION 1",
      inscripto: true,
    });
  };
  // COMITION2
  const handleComition2 = () => {
    const id = window.localStorage.getItem("idusuario");
    axios
      .post("http://localhost:3000/Comition2", {
        nombre: userName,
        apellido: userLastName,
        dni: userDNI,
        libreta: userLibreta,
        mail: userMail,
      })
      .then((res) => {
        setCorrectInscription2(true);
      })
      .catch((error) => {
        console.log(error.tipo);
      });
      axios.put(`http://localhost:3000/users/${id}`, {
        comision: "COMISION 2",
        inscripto: true,
      });
  };
  // COMITION3
  const handleComition3 = () => {
    const id = window.localStorage.getItem("idusuario");
    axios
      .post("http://localhost:3000/Comition3", {
        nombre: userName,
        apellido: userLastName,
        dni: userDNI,
        libreta: userLibreta,
        mail: userMail,
      })
      .then((res) => {
        setCorrectInscription3(true);
      })
      .catch((error) => {
        console.log(error.tipo);
      });
      axios.put(`http://localhost:3000/users/${id}`, {
        comision: "COMISION 3",
        inscripto: true,
      });
  };
  // COMITION4
  const handleComition4 = () => {
    const id = window.localStorage.getItem("idusuario");
    axios
      .post("http://localhost:3000/Comition4", {
        nombre: userName,
        apellido: userLastName,
        dni: userDNI,
        libreta: userLibreta,
        mail: userMail,
      })
      .then((res) => {
        setCorrectInscription4(true);
      })
      .catch((error) => {
        console.log(error.tipo);
      });
      axios.put(`http://localhost:3000/users/${id}`, {
        comision: "COMISION 4",
        inscripto: true,
      });
  };
  // COMITION5
  const handleComition5 = () => {
    const id = window.localStorage.getItem("idusuario");
    axios
      .post("http://localhost:3000/Comition5", {
        nombre: userName,
        apellido: userLastName,
        dni: userDNI,
        libreta: userLibreta,
        mail: userMail,
      })
      .then((res) => {
        setCorrectInscription5(true);
      })
      .catch((error) => {
        console.log(error.tipo);
      });
      axios.put(`http://localhost:3000/users/${id}`, {
        comision: "COMISION 5",
        inscripto: true,
      });
  };
  // COMITION6
  const handleComition6 = () => {
    const id = window.localStorage.getItem("idusuario");
    axios
      .post("http://localhost:3000/Comition6", {
        nombre: userName,
        apellido: userLastName,
        dni: userDNI,
        libreta: userLibreta,
        mail: userMail,
      })
      .then((res) => {
        setCorrectInscription6(true);
      })
      .catch((error) => {
        console.log(error.tipo);
      });
      axios.put(`http://localhost:3000/users/${id}`, {
        comision: "COMISION 6",
        inscripto: true,
      });
  };
  // COMITION7
  const handleComition7 = () => {
    const id = window.localStorage.getItem("idusuario");
    axios
      .post("http://localhost:3000/Comition7", {
        nombre: userName,
        apellido: userLastName,
        dni: userDNI,
        libreta: userLibreta,
        mail: userMail,
      })
      .then((res) => {
        setCorrectInscription7(true);
      })
      .catch((error) => {
        console.log(error.tipo);
      });
      axios.put(`http://localhost:3000/users/${id}`, {
        comision: "COMISION 7",
        inscripto: true,
      });
  };

  return (
    <div className="w-full flex justify-center">
      <h2 className={`${inscripted ? "w-4/5 p-4 bg-yellow-600 font-bold text-center" : "hidden"}`}>
        YA ESTA INSCRIPTO EN LA {comition}{" "}
      </h2>
      <div
        className={`${
          inscripted ? "hidden" : "w-4/5 flex flex-col justify-center"
        }`}
      >
        {/* COMITION1 */}
        <button
          className={`${
            correctInscription1
              ? "w-full font-bold bg-yellow-600 p-4 mb-2"
              : "w-full text-yellow-600 border-2 border-yellow-600 p-4 mb-2"
          }`}
          onClick={handleComition1}
        >
          {`${
            correctInscription1
              ? "INSCIPTO EN COMISION 1"
              : "INSCRIBIRSE EN COMISION 1"
          }`}
        </button>
        {/* COMITION1 */}
        <button
          className={`${
            correctInscription2
              ? "w-full font-bold bg-yellow-600 p-4 mb-2"
              : "w-full text-yellow-600 border-2 border-yellow-600 p-4 mb-2"
          }`}
          onClick={handleComition2}
        >
          {`${
            correctInscription2
              ? "INSCIPTO EN COMISION 2"
              : "INSCRIBIRSE EN COMISION 2"
          }`}
        </button>
        {/* COMITION1 */}
        <button
          className={`${
            correctInscription3
              ? "w-full font-bold bg-yellow-600 p-4 mb-2"
              : "w-full text-yellow-600 border-2 border-yellow-600 p-4 mb-2"
          }`}
          onClick={handleComition3}
        >
          {`${
            correctInscription3
              ? "INSCIPTO EN COMISION 3"
              : "INSCRIBIRSE EN COMISION 3"
          }`}
        </button>
        {/* COMITION1 */}
        <button
          className={`${
            correctInscription4
              ? "w-full font-bold bg-yellow-600 p-4 mb-2"
              : "w-full text-yellow-600 border-2 border-yellow-600 p-4 mb-2"
          }`}
          onClick={handleComition4}
        >
          {`${
            correctInscription4
              ? "INSCIPTO EN COMISION 4"
              : "INSCRIBIRSE EN COMISION 4"
          }`}
        </button>
        {/* COMITION1 */}
        <button
          className={`${
            correctInscription5
              ? "w-full font-bold bg-yellow-600 p-4 mb-2"
              : "w-full text-yellow-600 border-2 border-yellow-600 p-4 mb-2"
          }`}
          onClick={handleComition5}
        >
          {`${
            correctInscription5
              ? "INSCIPTO EN COMISION 5"
              : "INSCRIBIRSE EN COMISION 5"
          }`}
        </button>
        {/* COMITION1 */}
        <button
          className={`${
            correctInscription6
              ? "w-full font-bold bg-yellow-600 p-4 mb-2"
              : "w-full text-yellow-600 border-2 border-yellow-600 p-4 mb-2"
          }`}
          onClick={handleComition6}
        >
          {`${
            correctInscription6
              ? "INSCIPTO EN COMISION 6"
              : "INSCRIBIRSE EN COMISION 6"
          }`}
        </button>
        {/* COMITION1 */}
        <button
          className={`${
            correctInscription7
              ? "w-full font-bold bg-yellow-600 p-4 mb-2"
              : "w-full text-yellow-600 border-2 border-yellow-600 p-4 mb-2"
          }`}
          onClick={handleComition7}
        >
          {`${
            correctInscription7
              ? "INSCIPTO EN COMISION 7"
              : "INSCRIBIRSE EN COMISION 7"
          }`}
        </button>
      </div>
    </div>
  );
}
