import React from 'react';

const Course = (props) => {
    const { course } = props;

    return(
        <div>
            <h1> {course.name} </h1>
        </div>
    )
};

export default Course;