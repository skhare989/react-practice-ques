import React from "react";
import "./ImageContainer.css";
const ImageContainer = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="cute-pictures" className="image-container" />
    </div>
  );
};

export default ImageContainer;
