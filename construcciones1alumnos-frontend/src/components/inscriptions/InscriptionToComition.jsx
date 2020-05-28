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
  const [errorGeneral, setErrorGeneral] = useState(false)

  useEffect(() => {
    const id = window.localStorage.getItem("idusuario");
    console.log(id);

    const getUserBiId = (e) => {
      axios
        .get(`https://construcciones1backend.herokuapp.com/users/${id}`)
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
      .post("https://construcciones1backend.herokuapp.com/Comition1", {
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
        setErrorGeneral(true);
      });

    axios.put(`https://construcciones1backend.herokuapp.com/users/${id}`, {
      comision: "COMISION 1",
      inscripto: true,
    })
    .then(() => {
      window.location.reload(false);
    })
  };
  // COMITION2
  const handleComition2 = () => {
    const id = window.localStorage.getItem("idusuario");
    axios
      .post("https://construcciones1backend.herokuapp.com/Comition2", {
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
        setErrorGeneral(true);
      });
      axios.put(`https://construcciones1backend.herokuapp.com/users/${id}`, {
        comision: "COMISION 2",
        inscripto: true,
      })
      .then(() => {
        window.location.reload(false);
      })
  };
  // COMITION3
  const handleComition3 = () => {
    const id = window.localStorage.getItem("idusuario");
    axios
      .post("https://construcciones1backend.herokuapp.com/Comition3", {
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
        setErrorGeneral(true);
      });
      axios.put(`https://construcciones1backend.herokuapp.com/users/${id}`, {
        comision: "COMISION 3",
        inscripto: true,
      }) .then(() => {
        window.location.reload(false);
      })
  };
  // COMITION4
  const handleComition4 = () => {
    const id = window.localStorage.getItem("idusuario");
    axios
      .post("https://construcciones1backend.herokuapp.com/Comition4", {
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
        setErrorGeneral(true);
      });
      axios.put(`https://construcciones1backend.herokuapp.com/users/${id}`, {
        comision: "COMISION 4",
        inscripto: true,
      })
      .then(() => {
        window.location.reload(false);
      })
  };
  // COMITION5
  const handleComition5 = () => {
    const id = window.localStorage.getItem("idusuario");
    axios
      .post("https://construcciones1backend.herokuapp.com/Comition5", {
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
        setErrorGeneral(true);
      });
      axios.put(`https://construcciones1backend.herokuapp.com/users/${id}`, {
        comision: "COMISION 5",
        inscripto: true,
      })
      .then(() => {
        window.location.reload(false);
      })
  };
  // COMITION6
  const handleComition6 = () => {
    const id = window.localStorage.getItem("idusuario");
    axios
      .post("https://construcciones1backend.herokuapp.com/Comition6", {
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
        setErrorGeneral(true);
      });
      axios.put(`https://construcciones1backend.herokuapp.com/users/${id}`, {
        comision: "COMISION 6",
        inscripto: true,
      })
      .then(() => {
        window.location.reload(false);
      })
  };
  // COMITION7
  const handleComition7 = () => {
    const id = window.localStorage.getItem("idusuario");
    axios
      .post("https://construcciones1backend.herokuapp.com/Comition7", {
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
        setErrorGeneral(true);
      });
      axios.put(`https://construcciones1backend.herokuapp.com/users/${id}`, {
        comision: "COMISION 7",
        inscripto: true,
      })
      .then(() => {
        window.location.reload(false);
      })
  };

  return (
    <div className="w-full flex justify-center">
      {errorGeneral ? <h2 className="text-red-600">UN ERROR OCURRIO. VUELVA A INTENTARLO MAS TARDE.</h2> : 
      <h2 className={`${inscripted ? "w-4/5 p-4 bgyellow font-bold text-center" : "hidden"}`}>
        YA ESTA INSCRIPTO EN LA {comition}{" "}
      </h2>}
      <div
        className={`${
          inscripted ? "hidden" : "w-4/5 flex flex-col justify-center"
        }`}
      >
        {/* COMITION1 */}
        <button
          className={`${
            correctInscription1
              ? "w-full font-bold bgyellow p-4 mb-2"
              : "w-full textyellow border-2 borderyellow p-4 mb-2"
          }`}
          onClick={handleComition1}
        >
          {`${
            correctInscription1
              ? "INSCIPTO EN COMISION 1"
              : "INSCRIBIRSE EN COMISION 1"
          }`}
        </button>
        {/* COMITION2 */}
        <button
          className={`${
            correctInscription2
              ? "w-full font-bold bgyellow p-4 mb-2"
              : "w-full textyellow border-2 borderyellow p-4 mb-2"
          }`}
          onClick={handleComition2}
        >
          {`${
            correctInscription2
              ? "INSCIPTO EN COMISION 2"
              : "INSCRIBIRSE EN COMISION 2"
          }`}
        </button>
        {/* COMITION3 */}
        <button
          className={`${
            correctInscription3
              ? "w-full font-bold bgyellow p-4 mb-2"
              : "w-full textyellow border-2 borderyellow p-4 mb-2"
          }`}
          onClick={handleComition3}
        >
          {`${
            correctInscription3
              ? "INSCIPTO EN COMISION 3"
              : "INSCRIBIRSE EN COMISION 3"
          }`}
        </button>
        {/* COMITION4 */}
        <button
          className={`${
            correctInscription4
              ? "w-full font-bold bgyellow p-4 mb-2"
              : "w-full textyellow border-2 borderyellow p-4 mb-2"
          }`}
          onClick={handleComition4}
        >
          {`${
            correctInscription4
              ? "INSCIPTO EN COMISION 4"
              : "INSCRIBIRSE EN COMISION 4"
          }`}
        </button>
        {/* COMITION5 */}
        <button
          className={`${
            correctInscription5
              ? "w-full font-bold bgyellow p-4 mb-2"
              : "w-full textyellow border-2 borderyellow p-4 mb-2"
          }`}
          onClick={handleComition5}
        >
          {`${
            correctInscription5
              ? "INSCIPTO EN COMISION 5"
              : "INSCRIBIRSE EN COMISION 5"
          }`}
        </button>
        {/* COMITION6 */}
        <button
          className={`${
            correctInscription6
              ? "w-full font-bold bgyellow p-4 mb-2"
              : "w-full textyellow border-2 borderyellow p-4 mb-2"
          }`}
          onClick={handleComition6}
        >
          {`${
            correctInscription6
              ? "INSCIPTO EN COMISION 6"
              : "INSCRIBIRSE EN COMISION 6"
          }`}
        </button>
        {/* COMITION7 */}
        <button
          className={`${
            correctInscription7
              ? "w-full font-bold bg-yellow-600 p-4 mb-2"
              : "w-full textyellow border-2 borderyellow p-4 mb-2"
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
