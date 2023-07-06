import PropTypes from 'prop-types';
import CalculatorButtonsData from '../db/CalculatorButtonsData.json';

const CalculatorButtons = ({ handleClick }) => (
  <div className="Calculator__buttons--holder">
    {CalculatorButtonsData.map((row) => (
      <div className="row" key={row[0].content}>
        {row.map((button) => (
          <button
            type="button"
            key={button.content}
            className={`${button.className}`}
            onClick={handleClick}
          >
            {button.content}
          </button>
        ))}
      </div>
    ))}
  </div>
);

CalculatorButtons.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default CalculatorButtons;
