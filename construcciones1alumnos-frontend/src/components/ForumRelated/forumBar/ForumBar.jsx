//@ts-check
import React from "react";
import {useHistory} from "react-router-dom"

export default function ForumBar() {
    const history = useHistory();
    const newQuestion = () => {
        console.log("hola");
        history.push('/forumnew')
    }
    return (
    <div className="container mx-auto flex justify-between ">
      <div className="">
        <select
          className="w-full rounded-sm p-1 text-black"
          id="inputGroupSelect04"
          aria-label="Example select with button addon"
        >
          <option defaultValue>Temas</option>
          <option value="1">General</option>
          <option value="2">Madera</option>
          <option value="3">Metal</option>
          <option value="4">Hormigon</option>
          <option value="5">Plastico</option>
          <option value="6">Vidrio</option>
        </select>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
          </button>
        </div>
      </div>
      <button className="bg-yellow-600" onClick={newQuestion}>
        <i className="fa fa-plus"></i>
      </button> 
    </div>
  );
}
