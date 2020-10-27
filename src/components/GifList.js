import React from "react";
import GifPlayer from "react-gif-player";
import "./ImageList.css";

const GifList = (props) => {
  const gifs = props.results.map((result) => {
    return (
      <li className="image-grid__item" key={result.id}>
        <a className="grid-item">
          <div className="grid-item__image" key={result.id}>
            <GifPlayer
              gif={result.media[0].mediumgif.url}
              still={result.media[0].mediumgif.preview}
            />
          </div>
        </a>
      </li>
    );
  });

  return <ul className="image-grid">{gifs}</ul>;
};

export default GifList;
