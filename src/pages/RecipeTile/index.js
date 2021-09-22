import React from 'react';
import './index.css';

export default function RecipeTile({meal}) {
    return (
        <div className="recipeTile">
            <img className="recipeTile__img" src={meal.strMealThumb} alt="img not found"/>
            <p className="recipeTile__name">{meal.strMeal}</p>
            <p className="recipeTile__cookingInstructions"> {meal.strInstructions} </p>
        </div>
    )
}
