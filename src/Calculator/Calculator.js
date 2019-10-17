/* eslint-disable no-eval */
import React, { Component } from 'react';
import Display from '../Display/Display';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import classes from './Calculator.module.css';



class Calculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            output: '0',
        }
    }
    
    

    handleClick = (event) => {
        const value = event.target.value;
        const inputArray = this.state.input.split(/[+\-*/]/);
        const lastInput = inputArray[inputArray.length - 1];
        const lastInputDigit = this.state.input[this.state.input.length - 1];
        const beforeLastInputDigit = this.state.input[this.state.input.length - 2];
        const operatorArray = ["+", "-", "*", "/"];
        const changeState = () => {
            this.setState(prevState => ({ input: prevState.input += value })) 
        }

       

        switch (value) {
            case '=': {
                //preventing evaluation of output with empty or 1 number input
                if (inputArray.length === 0 || inputArray.length === 1){
                    break;
                }
                // preventing evaluation of output after previous input of "+" "-" "/" "*"
                else if (operatorArray.includes(lastInputDigit)){
                    break;
                }
                // preventing division by 0
                else if (lastInputDigit === "0" && beforeLastInputDigit === "/"){
                    break;
                }
                //evaluating output
                else {
                    const output = parseFloat(eval(this.state.input).toFixed(5)).toString();
                    this.setState({ output: output });    
                }
                break;
            }
            case 'Clear': {
                this.setState({ input: '', output: '0' });
                break;
            }
            case 'Delete': {
                //preventing using DELETE on empty input
                if (this.state.output === '0' && this.state.input === ''){
                    break;
                }

                this.setState(prevState => ({
                    input: prevState.input.slice(0, -1),
                    output: '0',
                }));
                break;
            }

            case '.': {
                // preventing the entered number to have more than one "."
                if (!lastInput.includes('.')) {
                    changeState();
                }
                break;
            }

            case '0': {
                //prevent the entered number to have "0" in the begining 
                if (!(lastInput[0] === "0") || (lastInput[0] === "0" && lastInput[1] === ".")) {
                    changeState();
                }
                break;
            }

            case "+":
            case "-":
            case "*":
            case "/": {
                //preventing using operators on empty input
                if (this.state.input === '') {
                    break;
                }
                //changing operator  
                else if (operatorArray.includes(lastInputDigit)) {
                    const newInput = this.state.input.slice(0, -1) + value;
                    this.setState({ input: newInput });
                    break;
                }
                else {
                    changeState();
                }
                break;
            }
            

            default: {
                changeState();
                break;
            }
        }
    }

    render() {
        return (
            <div className={classes.frame}>
                <div className={classes.container}>
                    <Display input={this.state.input} output={this.state.output} />
                    <ButtonContainer handleClick={this.handleClick} />
                </div>
                <p className={classes.paragraph}>Coded by Iryna Malankava</p>
                <p className={classes.paragraph}>Inspired by <a className={classes.anchor} 
                    href="https://dribbble.com/shots/2354920-Calculator-Day19-My-Free-UI-UX-SketchApp-Training">Dribbble</a></p>

            </div>

        )
    }
}

export default Calculator;
