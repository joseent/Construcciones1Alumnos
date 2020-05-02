//@ts-check
import React from "react";
import ForumList from "../../components/ForumRelated/ForumList/ForumList";
import './Forum.css'
import ForumBar from "../../components/ForumRelated/forumBar/ForumBar";
import NavBarTeachers from "../../components/general/navBar/NavBarTeachers";

export default function ForumTeachers() {
  return (
    <div >
      <div>
        <NavBarTeachers/>
        <ForumBar/>
        <ForumList/>
      </div>
    </div>
  );
}
