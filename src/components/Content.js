import React from "react";
import Part from "./Part";

const Content = ({content}) => {
    return(
        <div className="bg-light p-2">
            {content.map(
                c =>
                <Part key={c.id} name={c.name} exercise={c.exercises} 
                />)}
        </div>
    )
};

export default Content;