import React from 'react';
import PropTypes from 'prop-types';

const CalculatorScreen = ({ screenValue }) => (
  <div className="Calculator__screen">{screenValue}</div>
);

CalculatorScreen.propTypes = {
  screenValue: PropTypes.number.isRequired,
};

export default CalculatorScreen;
