//@ts-check
import React from "react";
import "../pages/Home.css";
import NavBar from "../components/general/navBar/NavBar.jsx";
export default function Home() {
  return (
    <div className="bg-black">
      <NavBar />
      <h1>ESTAMOS EN HOME</h1>
    </div>
  );
}
