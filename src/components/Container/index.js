import React from "react";
import "../../styles/Container.css"


function Container(props) {
  return <div className="container">{props.children}</div>;
}

export default Container;