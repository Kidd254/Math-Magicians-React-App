import PropTypes from 'prop-types';
import { useState } from 'react';
import calculate from '../logic/calculate';
import GrayButton from './GrayButton';
import OrangeButton from './OrangeButton';

function Calculator() {
  const [calculator, setCalculator] = useState({
    total: null,
    next: null,
    operation: null,
  });

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
    <div className="container mx-auto p-4">
      <p className="text-2xl font-bold mb-4">Let&apos;s do some math!</p>
      <div className="mx-auto w-96 p-4 border rounded-lg bg-gray-800 text-white">
        <div className="flex items-center justify-end h-16">
          <Display numberParent={displayNumber} />
        </div>
        <div className="grid grid-cols-4 gap-2">
          <GrayButton string="AC" clickCalc={clickCalc} />
          <GrayButton string="+/-" clickCalc={clickCalc} />
          <GrayButton string="%" clickCalc={clickCalc} />
          <OrangeButton string="÷" first clickCalc={clickCalc} />

          <GrayButton string="7" clickCalc={clickCalc} />
          <GrayButton string="8" clickCalc={clickCalc} />
          <GrayButton string="9" clickCalc={clickCalc} />
          <OrangeButton string="x" clickCalc={clickCalc} />

          <GrayButton string="4" clickCalc={clickCalc} />
          <GrayButton string="5" clickCalc={clickCalc} />
          <GrayButton string="6" clickCalc={clickCalc} />
          <OrangeButton string="-" clickCalc={clickCalc} />

          <GrayButton string="1" clickCalc={clickCalc} />
          <GrayButton string="2" clickCalc={clickCalc} />
          <GrayButton string="3" clickCalc={clickCalc} />
          <OrangeButton string="+" clickCalc={clickCalc} />

          <GrayButton string="0" clickCalc={clickCalc} big />
          <GrayButton string="." clickCalc={clickCalc} />
          <OrangeButton string="=" clickCalc={clickCalc} />
        </div>
      </div>
    </div>
  );
}

function Display(props) {
  const { numberParent } = props;
  return (
    <div className="flex-1 h-12 bg-gray-700 text-white text-right p-2">
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
