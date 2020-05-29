//@ts-check
import React from "react";
import {useHistory} from "react-router-dom"
import "./ForumBar.css";


export default function ForumBar() {
    const history = useHistory();
    const newQuestion = () => {
        history.push('/forumnew')
    }
    
    return (
    <div className="w-1/2 mx-auto flex justify-between items-center mb-5 barmedia">
      <div className="flex">
        <select
          className="w-full rounded-l-md p-1 text-black"
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
        <div className="">
          <button className="p-2 bgyellow text-bold border borderyellow rounded-r-md" type="button">
            BUSCAR
          </button>
        </div>
      </div>
      <button className="bgyellow rounded-md text-bold text-xl h-12 " onClick={newQuestion}>
        <i className="fa fa-plus m-2"></i>
      </button> 
    </div>
  );
}
