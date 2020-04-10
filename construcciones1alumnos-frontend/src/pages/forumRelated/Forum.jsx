//@ts-check
import React from "react";
import ForumList from "../../components/ForumRelated/ForumList/ForumList";
import './Forum.css'

export default function Forum() {
  return (
    <div >
      <div className="container">
        <h3 className="text-center mt-3">FORO</h3>
        <button className="btn"><i className="fas fa-plus"></i></button>
        <ForumList/>
      </div>
    </div>
  );
}
