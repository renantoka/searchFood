import React, { useState } from "react";
import "./index.css";

export default function RecipeTile({ meal }) {

  const [showInstructions, setShowInstructions] = useState(false)

  return (
    <div
      className="recipeTile"
    /*  onClick={() => {
       if (meal.strSource === "" || meal.strSource === null) {
         alert("Não tem receita");
       } else {
         window.open(meal.strSource);
       }
     }} */
    >
      <img
        onClick={() => {
          window.open(meal.strSource)
        }}
        className="recipeTile__img"
        src={meal.strMealThumb}
        alt="img not found"
      />
      <p className="recipeTile__name">Name: {meal.strMeal}</p>
      <p className="recipeTile__category">Category: {meal.strCategory}</p>
      <p>From: </p><p className="recipeTile__area"> {meal.strArea}</p>
      <div id="results" className="search-results"></div>
      <button className="recipeTile__button" onClick={() => setShowInstructions(!showInstructions)}>
        {showInstructions ? 'hide instructions' : 'show instructions'}
      </button>
      {showInstructions && <p className="recipeTile__instructions">{meal.strInstructions}</p>}

    </div>
  );
}
