import React from 'react';
import classes from './DisplayRow.module.css';

const DisplayRow = (props) => {
        const myClass = classes.displayRow + " " + classes[props.classname]
        return <input type = 'text' value = {props.value} className = {myClass}></input>
    

};

export default DisplayRow;