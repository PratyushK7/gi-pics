import React from "react";
import "./ImageList.css";

const ImageList = (props) => {
  const images = props.results.map((result) => {
    return (
      <li className="image-grid__item" key={result.id}>
        <a className="grid-item">
          <div
            className="grid-item__image"
            style={{ backgroundImage: `url(${result.largeImageURL})` }}
          ></div>
        </a>
      </li>
    );
  });

  return <ul className="image-grid">{images}</ul>;
};

export default ImageList;
