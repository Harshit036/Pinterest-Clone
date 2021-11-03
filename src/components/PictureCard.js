import React from "react";
import "../styles/PictureCard.css";

export default function PictureCard(props) {
  let { id, imageUrl } = props;
  return (
    <div className="picture_card">
    
      <img className="pins" key={id} src={imageUrl} alt=".." />
      
      <div className="btnc">
      <button className="btn">Save</button>
      </div>
    </div>
  );
}
