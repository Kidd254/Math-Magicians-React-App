import PropTypes from 'prop-types';
import { useState } from 'react';
import calculate from '../logic/calculate';
import OrangeBtn from './OrangeButton';
import GrayBtn from './GrayButton';

function Calculator() {
  const [calculator, setCalculator] = useState(
    {
      total: null,
      next: null,
      operation: null,
    },
  );

  const [displayNumber, setDisplayNumber] = useState('0');

  const byPassNext = (calculator) => {
    if (calculator.next) {
      return setDisplayNumber(calculator.next);
    }
    if (calculator.total) {
      return setDisplayNumber(calculator.total);
    }
    return setDisplayNumber('0');
  };
  const clickCalc = (value) => {
    const newCalculator = calculate(calculator, value);
    setCalculator(newCalculator);
    byPassNext(newCalculator);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 400,
        height: 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          height: 50,
          flex: 1,
        }}
      >
        <Display
          numberParent={displayNumber}
        />
      </div>
      <div className="calc-numbers">
        <div
          style={{
            flex: 1,
            flexDirection: 'row',
            display: 'flex',
          }}
          className="line"
        >
          <GrayBtn string="AC" clickCalc={clickCalc} />
          <GrayBtn string="+/-" clickCalc={clickCalc} />
          <GrayBtn string="%" clickCalc={clickCalc} />
          <OrangeBtn string="÷" first clickCalc={clickCalc} />
        </div>
        <div
          style={{
            flex: 1,
            flexDirection: 'row',
            display: 'flex',
          }}
          className="line"
        >
          <GrayBtn string="7" clickCalc={clickCalc} />
          <GrayBtn string="8" clickCalc={clickCalc} />
          <GrayBtn string="9" clickCalc={clickCalc} />
          <OrangeBtn string="x" clickCalc={clickCalc} />
        </div>
        <div
          style={{
            flex: 1,
            flexDirection: 'row',
            display: 'flex',
          }}
          className="line"
        >
          <GrayBtn string="4" clickCalc={clickCalc} />
          <GrayBtn string="5" clickCalc={clickCalc} />
          <GrayBtn string="6" clickCalc={clickCalc} />
          <OrangeBtn string="-" clickCalc={clickCalc} />
        </div>
        <div
          style={{
            flex: 1,
            flexDirection: 'row',
            display: 'flex',
          }}
          className="line"
        >
          <GrayBtn string="1" clickCalc={clickCalc} />
          <GrayBtn string="2" clickCalc={clickCalc} />
          <GrayBtn string="3" clickCalc={clickCalc} />
          <OrangeBtn string="+" clickCalc={clickCalc} />
        </div>
        <div
          style={{
            flex: 1,
            flexDirection: 'row',
            display: 'flex',
          }}
          className="line"
        >
          <GrayBtn string="0" clickCalc={clickCalc} big />
          <GrayBtn string="." clickCalc={clickCalc} />
          <OrangeBtn string="=" clickCalc={clickCalc} />
        </div>
      </div>
    </div>
  );
}

function Display(props) {
  const { numberParent } = props;
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        height: 50,
        color: 'white',
        background: 'gray',
        alignItems: 'center',
        justifyContent: 'flex-end',
        boxSizing: 'border-box',
        paddingRight: 8,
        paddingLeft: 8,
      }}
    >
      {numberParent}
    </div>
  );
}

Display.defaultProps = {
  numberParent: '0',
};

Display.propTypes = {
  numberParent: PropTypes.string,
};

export default Calculator;
