import React, { useState } from "react";
import styles from "./Header.module.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";

function Header({ isDarkMode, toggleFn }) {
  return (
    <div className={`${styles["header-wrap"]}`}>
      <header>
        <div className=" white">
          <h1>Recipe Catalog</h1>
        </div>
      </header>

      <ToggleSwitch isDarkMode={isDarkMode} toggleFn={toggleFn} />
    </div>
  );
}

export default Header;
