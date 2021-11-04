import React from "react";
import "../styles/PictureCard.css";

export default function PictureCard(props) {
  let { id, imageUrl } = props;
  return (
    <div className="picture_card">
      <img className="pins" key={id} src={imageUrl} alt=".." />
      <button className="btn_save">Save</button>
      <div className="overlay"></div>
    </div>
  );
}
