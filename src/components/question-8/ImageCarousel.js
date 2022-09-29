import React, { useEffect, useRef, useState } from "react";
import ImageContainer from "./ImageContainer";
import axios from "axios";
import "./ImageCarousel.css";

const ImageCarousel = () => {
  const url = "https://www.reddit.com/r/aww/top/.json?t=all";
  const [images, setImages] = useState([]);
  const [showImage, setShowImage] = useState(null);
  const imageRef = useRef(0);
  useEffect(() => {
    axios.get(url).then((response) => {
      let resp = response.data.data?.children
        ?.map((e) => {
          return e.data.url_overridden_by_dest;
        })
        .filter((el) => el.includes(".jpg"));

      setImages(resp);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage(images[imageRef.current]);
      console.log(imageRef.current);
      imageRef.current++;
      if (imageRef.current > images.length) imageRef.current = 0;
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [images]);

  const handleLeft = () => {
    imageRef.current--;
    setShowImage(images[imageRef.current]);
  };
  const handleRight = () => {
    imageRef.current++;
    setShowImage(images[imageRef.current]);
  };

  return (
    <div className="container">
      <div>
        <button onClick={() => handleLeft()}>Left</button>
      </div>
      <div>
        <ImageContainer imageUrl={showImage} />
      </div>
      <div>
        <button onClick={() => handleRight()}>Right</button>
      </div>
    </div>
  );
};

export default ImageCarousel;
