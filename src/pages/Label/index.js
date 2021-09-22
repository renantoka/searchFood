import React from 'react';
import './index.css';

export default function Label({meal}) {
    return (
            <option className="label" value={meal.value}>{meal.strCategory} </option>
    )
}
