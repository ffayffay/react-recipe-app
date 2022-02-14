import React, { usestate } from "react";
import styles from "./RecipeCard.module.css";

function RecipeCard({ recipeToDisplay, deleteRecipe, getIngredients }) {
  return (
    <div className="container-sm">
      <div>
        <button
          className="btn btn-secondary btn-lg"
          onClick={(e) => deleteRecipe(e, recipeToDisplay.id)}
        >
          Delete
        </button>
      </div>

      <div className={`${styles["rec-card-img-wrap"]}`}>
        <img src={recipeToDisplay.imgUrl} alt={recipeToDisplay.title} />
      </div>
      <div className="rec-card-title-wrap">
        <h1 className="rec-card-title">{recipeToDisplay.title}</h1>
      </div>
      <div className={`row align-items-center ${styles["rec-crd-banner"]}`}>
        <div className={`col ${styles["banner-item"]}`}>
          <h2 className="fs-4">Course:</h2>
          <div>{recipeToDisplay.course}</div>
        </div>
        <div className={`col ${styles["banner-item"]}`}>
          <h2 className="fs-4">Serving Size:</h2>
          <div>{recipeToDisplay.servSize}</div>
        </div>
        <div className={`col ${styles["banner-item"]}`}>
          <h2 className="fs-4">Prep Time:</h2>
          <div className="row">
            <div className="col">Hrs: {recipeToDisplay.prepHrs}</div>
            <div className="col">Mins: {recipeToDisplay.prepMins}</div>
          </div>
        </div>
        <div className={`col ${styles["banner-item"]}`}>
          <h2 className="fs-4">Cook Time:</h2>
          <div className="row">
            <div className="col">Hrs: {recipeToDisplay.cookHrs}</div>
            <div className="col">Mins: {recipeToDisplay.cookMins}</div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="head-btn-wrap">
            <h2 className="rec-card-sub-title">Ingredients:</h2>
            <div className="shop-btn-wrap">
              <button
                className="shop-list-btn"
                onClick={(ingredients) => getIngredients(recipeToDisplay.ingredients)}
              >
                Add Ingredients to Shopping List
              </button>
            </div>
          </div>

          <ul>
            {recipeToDisplay.ingredients.map((ingredient, idx ) => (
              <li key={idx + 1}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2 className="rec-card-sub-title">Directions:</h2>
          <ol>
            {recipeToDisplay.directions.map((direction, idx) => (
              <li key={idx + 1}>{direction}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="notes-wrap">
        <h2 className="rec-card-sub-title">Notes:</h2>
        <p>{recipeToDisplay.notes}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
