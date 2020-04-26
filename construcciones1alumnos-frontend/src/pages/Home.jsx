//@ts-check
import React from "react";
import "../pages/Home.css";
import LoginForm from "../components/loginForm/LoginForm";

export default function Home() {
  return (
    <div className="bgcolor ">
      <h1>ESTAMOS EN HOME</h1>

      <LoginForm />


    </div>
  );
}
