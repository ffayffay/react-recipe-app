import React from "react";
import styles from "./SideBar.module.css";
import SearchInput from "../SearchInput/SearchInput";

function SideBar({
  navigate,
  isDarkMode,
  searchRecipes,
  searchCriteria,
  setSearchCriteria,
}) {
  const handleClickHome = () => {
    navigate(0);
  };

  return (
    <div className={`${styles["side-option-wrap"]} ${isDarkMode ? styles["white"] : styles["gray"]}`}>
      <SearchInput
        isDarkMode={isDarkMode}
        searchRecipes={searchRecipes}
        searchCriteria={searchCriteria}
        setSearchCriteria={setSearchCriteria}
      />

      <div className={`${styles["side-bar-option"]}`}>
        <div className={`${styles["icon-wrap"]}`}>
          <svg
            className="i-plus icon"
            viewBox="0 0 32 32"
            width="32"
            height="32"
            fill="none"
            stroke="currentcolor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M16 2 L16 30 M2 16 L30 16" />
          </svg>
        </div>
        <div className={`${styles["side-nav-text"]}`}>
          <button onClick={() => navigate(1)}>Add New Recipe</button>
        </div>
      </div>

      <div className={`${styles["side-bar-option"]}`}>
        <div className={`${styles["icon-wrap"]}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-house-door"
            viewBox="0 0 16 16"
          >
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
          </svg>
        </div>
        <div className={`${styles["side-nav-text"]}`}>
          <button onClick={handleClickHome}>Home</button>
        </div>
      </div>

      <div className={`${styles["side-bar-option"]}`}>
        <div className={`${styles["icon-wrap"]}`}>
          <svg
            className="i-file icon"
            viewBox="0 0 32 32"
            width="32"
            height="32"
            fill="none"
            stroke="currentcolor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M6 2 L6 30 26 30 26 10 18 2 Z M18 2 L18 10 26 10" />
          </svg>
        </div>
        <div className={`${styles["side-nav-text"]}`}>
          <button onClick={() => navigate(2)}>Shopping List</button>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
