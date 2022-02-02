import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch.jsx';


function Header({ isDarkMode, toggleFn }) {
  console.log("darkmode:", isDarkMode)
  return (
      <div className="header-wrap">
        <header>
          <div className=" white">
            <h1>Recipe Catalog</h1>
          </div>

        </header>

        <ToggleSwitch isDarkMode={isDarkMode} toggleFn={toggleFn}/>
      </div>
    );
}

export default Header;