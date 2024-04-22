import React, { useState } from 'react'
import './App.css'

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState('');
  const [operator, setOperator] = useState('');
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleNumberClick = (num) => {
    if (waitingForSecondOperand) {
      setDisplay(String(num));
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const handleDecimalClick = () => {
    if (waitingForSecondOperand) {
      setDisplay('0.');
      setWaitingForSecondOperand(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };  

  const handleOperatorClick = (op) => {
    setOperator(op);
    setFirstOperand(display);
    setWaitingForSecondOperand(true);
  };

  const handleEqualClick = () => {
    const first = parseFloat(firstOperand);
    const second = parseFloat(display);

    if (operator === '+') {
      setDisplay(String(first + second));
    } else if (operator === '-') {
      setDisplay(String(first - second));
    } else if (operator === '*') {
      setDisplay(String(first * second));
    } else if (operator === '/') {
      setDisplay(second !== 0 ? String(first / second) : 'Error');
    }

    setOperator('');
    setWaitingForSecondOperand(false);
  };

  const handleClearClick = () => {
    setDisplay('0');
    setFirstOperand('');
    setOperator('');
    setWaitingForSecondOperand(false);
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleNumberClick(7)}>7</button>
        <button onClick={() => handleNumberClick(8)}>8</button>
        <button onClick={() => handleNumberClick(9)}>9</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={() => handleNumberClick(4)}>4</button>
        <button onClick={() => handleNumberClick(5)}>5</button>
        <button onClick={() => handleNumberClick(6)}>6</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleNumberClick(1)}>1</button>
        <button onClick={() => handleNumberClick(2)}>2</button>
        <button onClick={() => handleNumberClick(3)}>3</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleNumberClick(0)}>0</button>
        <button onClick={() => handleDecimalClick()}>.</button>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={handleClearClick}>C</button>
      </div>
    </div>
  );
};

export default Calculator;