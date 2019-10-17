import React from 'react';
import classes from './Button.module.css';


const Button = (props) => {
        const myClass = classes.button + " " + classes[props.classname] ;
        return (<div className = 'Button'>
                    <button
                    id = {props.id}
                    className = {myClass}
                    value = {props.label}
                    onClick = {props.handleClick}>{props.children}</button>
                </div>)

};

export default Button;
