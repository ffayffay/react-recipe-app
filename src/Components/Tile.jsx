import React, { usestate } from "react";

function Tile({ displayRecipe, r, tile, isDarkMode }) {
  return (
    <div className={`tile ${isDarkMode ? "dark-mode-tile" : ""}`}>
      <div className="card-img-wrap img-wrap">
        <img src={r.imgUrl} />
      </div>

      <div className="title tile-title-wrap">
        <p id={r.id} onClick={(e) => displayRecipe(e)}>
          {r.title}
        </p>
      </div>
    </div>
  );
}

export default Tile;
