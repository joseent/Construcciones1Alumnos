//@ts-check
import React from "react";
import NavBarTeachers from "../../components/general/navBar/NavBarTeachers";
import ForumByIdTeachersComp from "../../components/ForumRelated/forumByID/ForumByIdTeachersComp";


export default function ForumByIDTeachers() {
  return (
    <div >
      <div>
        <NavBarTeachers/>
        <ForumByIdTeachersComp/>
      </div>
    </div>
  );
}
