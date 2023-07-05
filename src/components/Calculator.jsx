import React, { useState } from 'react';
import CalculatorScreen from './CalculatorScreen';
import CalculatorButtons from './CalculatorButtons';
import calculator from '../logic/calculate';

const Calculator = () => {
  const currentOperation = {
    total: null,
    next: null,
    operation: null,
  };

  const [screenValue, setScreenValue] = useState(currentOperation);

  const onHandleClick = (e) => {
    const calculatorButton = e.target.innerText;
    const newScreenValue = calculator.calculate(screenValue, calculatorButton);

    setScreenValue(newScreenValue);
  };

  const screenValueToDisplay = screenValue.next || screenValue.total || 0;

  return (
    <div className="Calculator">
      <CalculatorScreen screenValue={screenValueToDisplay} />
      <CalculatorButtons handleClick={onHandleClick} />
    </div>
  );
};

export default Calculator;
