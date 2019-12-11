import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <span onClick={() => props.clickCount(props.id)} className="remove">
      <div className="card">
        
          <img alt={props.name} src={props.image} width={"80px"} height={"120px"}/>
      
      </div>
    </span>
  );
}

export default FriendCard;
