import React from 'react';
import DisplayRow from '../DisplayRow/DisplayRow';

import classes from './Display.module.css';


const Display = (props) => (
    
        <div className = {classes.display}>
            <DisplayRow classname = "input"  value = {props.input}/>
            <DisplayRow classname = "output" value = {props.output}/>
        </div>

);

export default Display;