//@ts-check
import React from "react";
import ForumList from "../../components/ForumRelated/ForumList/ForumList";
import './Forum.css'
import NavBar from "../../components/general/navBar/NavBar";

export default function Forum() {
  return (
    <div >
      <div>
        <NavBar/>
        <ForumList/>
      </div>
    </div>
  );
}
