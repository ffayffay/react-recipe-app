import React, { useState } from "react";

// props
// isDarkMode: boolean - determines if the component is in dark mode.
// togglefn: function - function to run when switch is clicked.
function ToggleSwitch({ isDarkMode, toggleFn }) {
  return (
    <div id="toggle-wrap">
      <h3>Dark Mode</h3>
      <div id="toggle">
        <label className="switch">
          <input type="checkbox" onClick={toggleFn} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}

export default ToggleSwitch;
