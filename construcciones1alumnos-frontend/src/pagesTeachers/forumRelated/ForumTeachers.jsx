//@ts-check
import React from "react";
import './Forum.css'
import NavBarTeachers from "../../components/general/navBar/NavBarTeachers";
import ForumListTeachers from "../../components/ForumRelated/ForumList/ForumListTeachers";

export default function ForumTeachers() {
  return (
    <div >
      <div>
        <NavBarTeachers/>
        <ForumListTeachers/>
      </div>
    </div>
  );
}
