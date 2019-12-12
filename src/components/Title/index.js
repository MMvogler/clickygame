import React from "react";
import "./style.css";

const Title = props => (
  // console.log("props over here", props);
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="subtitle">
      Click on an image to earn points, but don't click on any more than once!
    </div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
);

export default Title;