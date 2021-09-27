import React from 'react';
import Header from './Header';
import Content from './Content';
import Exercises from './Exercises';

const Course = ({ course }) => {
    return(
        <div className="container bg-info rounded py-1 mb-2">
            <Header header={course.name} /> 
            <Content content={course.parts} />
            <Exercises exercises={course.parts} /> 
        </div>
    )
};

export default Course;