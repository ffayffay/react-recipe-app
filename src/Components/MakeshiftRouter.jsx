import React from "react";
import Form from "./Form/Form.jsx";
import ShoppingList from "./ShoppingList.jsx";
import Tile from "./Tile.jsx";
import RecipeCard from "./RecipeCard/RecipeCard.jsx";

function MakeshiftRouter({
  currentRoute,
  isDarkMode,
  recipeToDisplay,
  displayRecipe,
  recipes,
  addRecipe,
  deleteRecipe,
}) {
  switch (currentRoute) {
    case 0:
      return (
        <div className="gallery-wrap">
          {recipes.map((r, key) => (
            <Tile
              recipeToDisplay={recipeToDisplay}
              displayRecipe={displayRecipe}
              recipes={recipes}
              r={r}
              key={key + 1}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      );
    case 1:
      return <Form isDarkMode={isDarkMode} addRecipe={addRecipe} />;
    case 2:
      return <ShoppingList />;
    case 3:
      return <RecipeCard recipeToDisplay={recipeToDisplay} deleteRecipe={deleteRecipe} />;
    default:
      return <></>;
  }
}

export default MakeshiftRouter;
