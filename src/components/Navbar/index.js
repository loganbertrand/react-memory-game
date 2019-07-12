import React from "react";
import "../../styles/Navbar.css"

function Navbar(props) {
  return (
    <nav className="navbar">
      
       <a className = "navbar-brand" href="/">Memory Game</a>
        <span className = "navbar-text">{props.status}</span>
        <span className = "navbar-text">Score: {props.score} | High Score: {props.highScore}</span>
      
    </nav>
  );
}

export default Navbar;