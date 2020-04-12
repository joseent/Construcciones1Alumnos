//@ts-check
import React from "react";
import ForumList from "../../components/ForumRelated/ForumList/ForumList";
import './Forum.css'
import ForumBar from "../../components/ForumRelated/forumBar/ForumBar";

export default function Forum() {
  return (
    <div >
      <div>
        <ForumBar/>
        <ForumList/>
      </div>
    </div>
  );
}
