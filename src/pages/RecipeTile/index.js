import React from "react";
import "./index.css";

export default function RecipeTile({ meal }) {
 
  return (
    <div
      className="recipeTile"
      onClick={() => {
        if (meal.strSource == "" || meal.strSource == null) {
          alert("Não tem receita");
        } else {
          window.open(meal.strSource);
        }
      }}
    >
      <img
        className="recipeTile__img"
        src={meal.strMealThumb}
        alt="img not found"
      />
      <p className="recipeTile__name">{meal.strMeal}</p>
      <p className="recipeTile__category">{meal.strCategory}</p>
      <p className="recipeTile__area">{meal.strArea}</p>
      <div id="results" className="search-results"></div>
      <button >
      work here
      </button>
        <p>{meal.strInstructions}</p>
    </div>
  );
}
