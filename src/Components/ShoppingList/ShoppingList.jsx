import React from "react";
import styles from "./ShoppingList.module.css";

function ShoppingList({ shopList, deleteIng }) {
  return (
    <div className={`${styles["shop-list-wrap"]}`}>
      <div className={`${styles["title-banner"]}`}>
        <h1>Shopping List:</h1>
      </div>
      <div className={`${styles["list-ul-wrap"]}`}>
        <ul className={`list-group list-group-flush ${styles["rounded"]}`}>
          {shopList.map((ing, idx) => (
            <li
              key={idx + 1}
              className={`list-group-item ${styles["list-item"]}`}
            >
              <input className="form-check-input me-1" type="checkbox" />
              {ing}
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={(e) => deleteIng(e, ing)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShoppingList;
