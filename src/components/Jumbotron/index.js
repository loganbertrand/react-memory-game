import React from "react";


function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Memory Click Game!</h1>
            <p className="lead">Try and click each character only once! If you click any a second time, it is Game Over!</p>
            <p className="h5">Score: {props.score} | High Score: {props.highScore}</p><br></br>
            <p className="h4">{props.status}</p>
        </div>
    </div>
  ) 
}

export default Jumbotron;