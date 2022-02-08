import React from "react";
import Form from "./Form/Form.jsx";
import ShoppingList from "./ShoppingList.jsx";
import Tile from "./Tile.jsx";
import RecipeCard from "./RecipeCard.jsx";

function MakeshiftRouter({
  currentRoute,
  isDarkMode,
  recipeToDisplay,
  displayRecipe,
  recipes,
  addRecipe,
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
      return <RecipeCard recipeToDisplay={recipeToDisplay} />;
    default:
      return <></>;
  }
}

export default MakeshiftRouter;
