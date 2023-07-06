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

  const getScreenValueToDisplay = () => {
    if (
      screenValue.total === null
      && screenValue.operation === null
      && screenValue.next === null
    ) {
      return 0;
    }
    return `${screenValue.total || ''} ${screenValue.operation || ''} ${
      screenValue.next || ''
    }`;
  };

  const screenValueToDisplay = getScreenValueToDisplay();

  return (
    <div className="Calculator">
      <CalculatorScreen screenValue={screenValueToDisplay} />
      <CalculatorButtons handleClick={onHandleClick} />
    </div>
  );
};

export default Calculator;
