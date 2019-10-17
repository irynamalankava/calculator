import React from 'react';
import Button from '../Button/Button';

import classes from './ButtonContainer.module.css';

const ButtonContainer = (props) => (
    <div className = {classes.buttonContainer}>
        <div className={classes.buttonRow}>
            <Button id='clear' label={'Clear'} handleClick={props.handleClick} classname="clear">CLS</Button>
            <Button id='delete' label={'Delete'} handleClick={props.handleClick} classname="clear">DEL</Button>
            <Button id='divide' label={'/'} handleClick={props.handleClick} classname="operator">/</Button>
        </div>
        <div className={classes.buttonRow}>
            <Button id='seven' label={'7'} handleClick={props.handleClick}>7</Button>
            <Button id='eight' label={'8'} handleClick={props.handleClick}>8</Button>
            <Button id='nine' label={'9'} handleClick={props.handleClick}>9</Button>
            <Button id='multiply' label={'*'} handleClick={props.handleClick} classname="operator">x</Button>
        </div>
        <div className={classes.buttonRow}>
            <Button id='four' label={'4'} handleClick={props.handleClick}>4</Button>
            <Button id='five' label={'5'} handleClick={props.handleClick}>5</Button>
            <Button id='six' label={'6'} handleClick={props.handleClick}>6</Button>
            <Button id='subtract' label={'-'} handleClick={props.handleClick} classname="operator">-</Button>
        </div>
        <div className={classes.buttonRow}>
            <Button id='one' label={'1'} handleClick={props.handleClick}>1</Button>
            <Button id='two' label={'2'} handleClick={props.handleClick}>2</Button>
            <Button id='three' label={'3'} handleClick={props.handleClick}>3</Button>
            <Button id='add' label={'+'} handleClick={props.handleClick} classname="operator">+</Button>
        </div>
        <div className={classes.buttonRow}>
            <Button id='decimal' label={'.'} handleClick={props.handleClick} classname="decimal"><div className={classes.decimalSign}></div></Button>
            <Button id='zero' label={'0'} handleClick={props.handleClick} classname="zero">0</Button>
            <Button id='equals' label={'='} handleClick={props.handleClick} classname="operator">=</Button>
        </div>
    </div>
)

export default ButtonContainer;