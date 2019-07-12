import React from "react";
import "../../styles/Jumbotron.css"


function Jumbotron(props) {
  return (
    <div className="jumbotron">
        <div className="container">
            <h1 className="display-4">Memory Click Game!</h1>
            <p className="lead">Try and click each character only once! If you click any a second time, it is Game Over!</p>
        </div>
    </div>
  ) 
}

export default Jumbotron;