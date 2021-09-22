import React from 'react'

export default function Instruction({meal}) {
    return (
        <div>
        <p> {meal.strInstructions} </p>
        </div>
    )
}
