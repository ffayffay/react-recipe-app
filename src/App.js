import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import MakeshiftRouter from './Components/MakeshiftRouter';


function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(0);
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => setRecipes([...recipes, recipe]);

  console.log(isDarkMode);

  return (
    <div className="App">
      <Header isDarkMode={isDarkMode} toggleFn={() => setIsDarkMode(!isDarkMode)} />
      <div className={`all-content-wrap ${isDarkMode ? "dark-mode-body" : ""}`}>
        <SideBar isDarkMode={isDarkMode} handleClick={(newRoute) => setCurrentRoute(newRoute)}/>
        <div className="body-wrap">
          <MakeshiftRouter currentRoute={currentRoute} isDarkMode={isDarkMode} recipes={recipes} addRecipe={addRecipe}  />
        </div>
      </div>
    </div>
  );
}

export default App;
