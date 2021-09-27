import React from 'react';
import Header from './Header';
import Content from './Content';
import Exercises from './Exercises';

const Course = (props) => {
    const { course } = props;

    return(
        <div>
            <Header header={course.name} />
            <Content content={course.parts} />
            <Exercises exercises={course.parts}  />
        </div>
    )
};

export default Course;