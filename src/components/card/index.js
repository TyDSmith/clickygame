import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} 
        src={props.image} 
        id={props.id} 
        // alt="thumbnail" 
        className="img-thumbnail"
        onClick={() => props.scoreCount(props.id)} />
        </div>
    </div>
  );
}

export default Card;
