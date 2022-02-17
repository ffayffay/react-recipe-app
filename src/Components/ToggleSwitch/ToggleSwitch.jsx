import React, { useState } from "react";
import styles from "./ToggleSwitch.module.css";

// props
// isDarkMode: boolean - determines if the component is in dark mode.
// togglefn: function - function to run when switch is clicked.
function ToggleSwitch({ isDarkMode, toggleFn }) {
  return (
    <div id={`${styles["toggle-wrap"]}`}>
      <h3>Dark Mode</h3>
      <div id="toggle">
        <label className={`${styles["switch"]}`}>
          <input type="checkbox" onChange={toggleFn} checked={isDarkMode} />
          <span className={`${styles["slider"]} ${styles["round"]}`}></span>
        </label>
      </div>
    </div>
  );
}

export default ToggleSwitch;
