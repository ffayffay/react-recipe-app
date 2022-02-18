import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import MakeshiftRouter from "./Components/MakeshiftRouter";
import { seedRecipes } from "./seed";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [recipeToDisplay, setRecipeToDisplay] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState("");
  const [shopList, setShopList] = useState([]);

  const addRecipe = (recipe) => setRecipes([...recipes, recipe]);

  const displayRecipe = (e) => {
    const clickedRecipeId = e.target.id;
    const foundRecipe = recipes.find((r) => r.id === clickedRecipeId);
    console.log("clicked id", clickedRecipeId, "found id", foundRecipe);
    setRecipeToDisplay(foundRecipe);
    setCurrentRoute(3);
  };

  const getIngredients = (array) => {
    const ings = [...shopList, ...array];
    console.log("ings", ings);
    setShopList(ings);
  };

  const deleteIng = (e, idToDel) => {
    console.log("got ing id", idToDel);
    const newShopList = shopList.filter((i) => i !== idToDel);
    setShopList(newShopList);
  };

  const deleteRecipe = (e, idToDel) => {
    const newRecList = recipes.filter((r) => r.id !== idToDel);
    setRecipes(newRecList);
    setCurrentRoute(0);
  };

  const searchRecipes = () => {
    if (searchCriteria === "") {
      setFilteredRecipes(recipes);
      return;
    }
    const foundRecipes = recipes.filter((r) =>
      r.title.toLowerCase().includes(searchCriteria)
    );
    console.log("found recipe to match search", foundRecipes);
    setFilteredRecipes(foundRecipes);
  };

  const getRecStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };


  useEffect(() => {
    if (!isLoaded) {
      // get stuff out of local storage
      // and set it.
      const storedRec = getRecStorage("Recipe") || [];
      const darkMode = getRecStorage("isDarkMode") || false;
      const storedShopList = getRecStorage("shopList") || [];

      setIsDarkMode(darkMode);
      setShopList(storedShopList);

      if (storedRec.length) {
        setRecipes(storedRec);
        setFilteredRecipes(storedRec);
      } else {
        setRecipes(seedRecipes);
        setFilteredRecipes(seedRecipes);
      }

      setIsLoaded(true);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (searchCriteria === "") setFilteredRecipes(recipes);
  }, [searchCriteria, recipes]);

  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [currentRoute, setSearchCriteria, recipes]);

  useEffect(() => {
    localStorage.setItem("Recipe", JSON.stringify(recipes));
  }, [recipes]);

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem("shopList", JSON.stringify(shopList))
  }, [shopList]);
 
  return (
    <div className="App">
      <Header
        isDarkMode={isDarkMode}
        toggleFn={() => setIsDarkMode(!isDarkMode)}
      />
      <div className={`all-content-wrap ${isDarkMode ? "dark-mode-body" : ""}`}>
        <SideBar
          isDarkMode={isDarkMode}
          currentRoute={currentRoute}
          navigate={(newRoute) => setCurrentRoute(newRoute)}
          searchRecipes={searchRecipes}
          searchCriteria={searchCriteria}
          setSearchCriteria={setSearchCriteria}
        />
        <div className="body-wrap">
          <MakeshiftRouter
            currentRoute={currentRoute}
            isDarkMode={isDarkMode}
            recipes={filteredRecipes}
            addRecipe={addRecipe}
            recipeToDisplay={recipeToDisplay}
            displayRecipe={displayRecipe}
            deleteRecipe={deleteRecipe}
            getIngredients={getIngredients}
            shopList={shopList}
            deleteIng={deleteIng}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
