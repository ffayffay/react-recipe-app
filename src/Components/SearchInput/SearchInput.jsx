import React from "react";
import styles from "./SearchInput.module.css";

function SearchInput({
  isDarkMode,
  searchRecipes,
  searchCriteria,
  setSearchCriteria,
}) {
  return (
    <div className={`mb-3 ${styles["outer-cont"]}`}>
      <input
        className="form-control"
        type="text"
        placeholder="Filter Recipes"
        value={searchCriteria}
        onChange={(e) => setSearchCriteria(e.target.value)}
      />
      <div
        onClick={() => setSearchCriteria("")}
        className={`${styles["x-cont"]} ${searchCriteria.length === 0 ? styles["hide"] : ""}`}
      >
        X
      </div>
      <button
        onClick={searchRecipes}
        className={`search-btn btn-style btn btn-sm ${
          isDarkMode
            ? "btn-outline-light dark-mode-btn"
            : "btn-outline-secondary"
        }`}
      >
        <svg
          className="i-search icon"
          viewBox="0 0 32 32"
          width="64"
          height="64"
          fill="none"
          stroke="currentcolor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <circle cx="14" cy="14" r="12" />
          <path d="M23 23 L30 30" />
        </svg>
      </button>
    </div>
  );
}

export default SearchInput;
