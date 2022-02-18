import React from "react";
import styles from "./Tile.module.css";

function Tile({ displayRecipe, r, tile, isDarkMode }) {
  return (
    <div className={`${styles["tile"]} ${isDarkMode ? "dark-mode-tile" : ""}`}>
      <div className={`${styles["card-img-wrap"]} ${styles["img-wrap"]}`}>
        <img src={r.imgUrl} alt={r.title} />
      </div>

      <div className={`${styles["title"]} ${styles["tile-title-wrap"]}`}>
        <p id={r.id} onClick={(e) => displayRecipe(e)}>
          {r.title}
        </p>
      </div>
    </div>
  );
}

export default Tile;
