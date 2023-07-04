import CalculatorButtonsData from '../db/CalculatorButtonsData.json';

const CalculatorButtons = () => (
  <>
    {CalculatorButtonsData.map((row) => (
      <div className="row" key={row[0].content}>
        {row.map((button) => (
          <button
            type="button"
            key={button.content}
            className={`${button.className}`}
          >
            {button.content}
          </button>
        ))}
      </div>
    ))}
  </>
);

export default CalculatorButtons;
