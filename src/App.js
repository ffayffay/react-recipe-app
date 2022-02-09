import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar";
import MakeshiftRouter from "./Components/MakeshiftRouter";
import { seedRecipes } from "./seed";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [recipeToDisplay, setRecipeToDisplay] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const addRecipe = (recipe) => setRecipes([...recipes, recipe]);

  const displayRecipe = (e) => {
    const clickedRecipeId = e.target.id;
    const foundRecipe = recipes.find((r) => r.id === clickedRecipeId);
    console.log("clicked id", clickedRecipeId, "found id", foundRecipe);
    setRecipeToDisplay(foundRecipe);
    setCurrentRoute(3);
  };

  const deleteRecipe = (e, idToDel) => {
    console.log("delete recipe id", idToDel);
    const newRecList = recipes.filter(r => r.id !== idToDel);
    console.log("new recipe after delete:", newRecList);
    setRecipes(newRecList);
    setCurrentRoute(0)
  }

  useEffect(() => {
    if (!isLoaded) {
      // get stuff out of local storage
      // and set it.
      setRecipes(seedRecipes);
      setIsLoaded(true);
    }
  }, [isLoaded])

  useEffect(() => {
    // set recipes in local storage
    console.log(recipes)
  }, [recipes])

  // const handleRecStorage = () => {
  //     localStorage.setItem('Recipe', recipe);
  //  };

  return (
    <div className="App">
      <Header
        isDarkMode={isDarkMode}
        toggleFn={() => setIsDarkMode(!isDarkMode)}
      />
      <div className={`all-content-wrap ${isDarkMode ? "dark-mode-body" : ""}`}>
        <SideBar
          isDarkMode={isDarkMode}
          handleClick={(newRoute) => setCurrentRoute(newRoute)}
        />
        <div className="body-wrap">
          <MakeshiftRouter
            currentRoute={currentRoute}
            isDarkMode={isDarkMode}
            recipes={recipes}
            addRecipe={addRecipe}
            recipeToDisplay={recipeToDisplay}
            displayRecipe={displayRecipe}
            deleteRecipe={deleteRecipe}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
