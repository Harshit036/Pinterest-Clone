import React from "react";
import "../styles/PicturecardTemp.css";

export default function PictureCard(props) {
  let { id, imageUrl } = props;
  return (
    <div className="picture_card">
      <img
        className="pins"
        key={id}
        src="https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt=".."
      />
    </div>
  );
}
