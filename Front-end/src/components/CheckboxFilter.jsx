import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Filtros.css";

function CheckBox(props){
  const [check, setCheck] = useState(false);
  
  function handleClick(){
    setCheck(!check)
  }

  return(
    <div className="check-box-container">
      <div className="check-titulo">
        {props.name}
      </div>
      <label className="check">
        <input 
          type="checkbox" 
          checked={check}
          onChange={handleClick}
          name={props.name} 
          id={props.name} 
          />
          <span className="custom-checkmark"></span>
      </label>
    </div>
  )
}

export default CheckBox;