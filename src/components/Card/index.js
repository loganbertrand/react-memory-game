import React from "react";
import "../../styles/Card.css"


function Card(props) {
  return (
    <div id={props.id} className="card col-xs-12 col-sm-6 col-md-3" onClick={props.cardClicked} >
      <div id={props.id} className="img-container">
        <img id={props.id} alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Card;