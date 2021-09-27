import React from "react";

const Exercises = ({ exercises }) => {
    const num = exercises.map(n => n.exercises);
    return(
        <strong>
         total of {num.reduce((total,value) => total + value)} exercises 
        </strong>
    )
}

export default Exercises;