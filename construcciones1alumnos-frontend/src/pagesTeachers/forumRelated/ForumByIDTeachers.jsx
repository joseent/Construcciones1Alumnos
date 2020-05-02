//@ts-check
import React from "react";
import ForumByID from "../../components/ForumRelated/forumByID/ForumByID";
import NavBarTeachers from "../../components/general/navBar/NavBarTeachers";


export default function ForumByIDTeachers() {
  return (
    <div >
      <div>
        <NavBarTeachers/>
        <ForumByID/>
      </div>
    </div>
  );
}
