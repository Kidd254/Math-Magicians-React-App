import PropTypes from 'prop-types';
import { useState } from 'react';
import calculate from '../logic/calculate';
import GrayButton from './GrayButton';
import OrangeButton from './OrangeButton';

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
      }}
    >
      <p
        style={{
          paddingLeft: 100,
          fontWeight: 'bolder',
        }}
      >
        Lets do some math!

      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 500,
          height: 'auto',
          paddingLeft: 500,
        }}
      >

        {' '}

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
            <GrayButton string="AC" clickCalc={clickCalc} />
            <GrayButton string="+/-" clickCalc={clickCalc} />
            <GrayButton string="%" clickCalc={clickCalc} />
            <OrangeButton string="÷" first clickCalc={clickCalc} />
          </div>
          <div
            style={{
              flex: 1,
              flexDirection: 'row',
              display: 'flex',
            }}
            className="line"
          >
            <GrayButton string="7" clickCalc={clickCalc} />
            <GrayButton string="8" clickCalc={clickCalc} />
            <GrayButton string="9" clickCalc={clickCalc} />
            <OrangeButton string="x" clickCalc={clickCalc} />
          </div>
          <div
            style={{
              flex: 1,
              flexDirection: 'row',
              display: 'flex',
            }}
            className="line"
          >
            <GrayButton string="4" clickCalc={clickCalc} />
            <GrayButton string="5" clickCalc={clickCalc} />
            <GrayButton string="6" clickCalc={clickCalc} />
            <OrangeButton string="-" clickCalc={clickCalc} />
          </div>
          <div
            style={{
              flex: 1,
              flexDirection: 'row',
              display: 'flex',
            }}
            className="line"
          >
            <GrayButton string="1" clickCalc={clickCalc} />
            <GrayButton string="2" clickCalc={clickCalc} />
            <GrayButton string="3" clickCalc={clickCalc} />
            <OrangeButton string="+" clickCalc={clickCalc} />
          </div>
          <div
            style={{
              flex: 1,
              flexDirection: 'row',
              display: 'flex',
            }}
            className="line"
          >
            <GrayButton string="0" clickCalc={clickCalc} big />
            <GrayButton string="." clickCalc={clickCalc} />
            <OrangeButton string="=" clickCalc={clickCalc} />
          </div>
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
