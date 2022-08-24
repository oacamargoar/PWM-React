import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetngF = (props) => {
    //Introducción a useState
    const[age, setAge] = useState(29)

    const birthday = () => {
        setAge(age + 1)
    }
    return (
        <div>
            <h1>
                Hi, { props.name } from functional component
            </h1>
            <h2>
                You're { age } years old.
            </h2>
            <div>
                <button onClick={ birthday }>Happy birthday</button>
            </div>
        </div>
    );
};


GreetngF.propTypes = {
    name: PropTypes.string
};


export default GreetngF;
