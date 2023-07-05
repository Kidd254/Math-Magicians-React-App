import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
function Calculator() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 400,
        height: 'auto',
        backgroundColor: 'gray',
      }}
    >
      <div
        style={{
          display: 'flex',
          height: 50,
          flex: 1,
          marginLeft: 'auto',
        }}

      >

        <Display numberParent={0} />

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
          <GrayButton string="AC" />
          <GrayButton string="+/-" />
          <GrayButton string="%" />
          <OrangeButton string="/" />
        </div>
        <div
          style={{
            flex: 1,
            flexDirection: 'row',
            display: 'flex',
          }}
          className="line"
        >
          <GrayButton string="7" />
          <GrayButton string="8" />
          <GrayButton string="9" />
          <OrangeButton string="x" />
        </div>
        <div
          style={{
            flex: 1,
            flexDirection: 'row',
            display: 'flex',
          }}
          className="line"
        >
          <GrayButton string="4" />
          <GrayButton string="5" />
          <GrayButton string="6" />
          <OrangeButton string="-" />
        </div>
        <div
          style={{
            flex: 1,
            flexDirection: 'row',
            display: 'flex',
          }}
          className="line"
        >
          <GrayButton string="1" />
          <GrayButton string="2" />
          <GrayButton string="3" />
          <OrangeButton string="+" />
        </div>
        <div
          style={{
            flex: 1,
            flexDirection: 'row',
            display: 'flex',
          }}
          className="line"
        >
          <GrayButton string="0" big />
          <GrayButton string="." />
          <OrangeButton string="=" />
        </div>
      </div>
    </div>
  );
}

function OrangeButton(props) {
  const { string } = props;
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        color: 'black',
        background: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#dfdfdf',
        borderTop: 0,
      }}
    >
      {string}
    </div>
  );
}

OrangeButton.defaultProps = {
  string: 0,
};

OrangeButton.propTypes = {
  string: PropTypes.string,
};

function GrayButton(props) {
  const { string } = props;
  const { big } = props;
  return (
    <div
      style={{
        display: 'flex',
        flex: big ? 2 : 1,
        height: 50,
        color: 'black',
        background: '#dfdfdf',
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'gray',
        paddingLeft: big ? 1 : 0,
        boxSizing: 'border-box',
      }}
    >
      {string}
    </div>
  );
}

GrayButton.defaultProps = {
  string: 0,
  big: false,
};

GrayButton.propTypes = {
  string: PropTypes.string,
  big: PropTypes.bool,
};

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
        justifyContent: 'center',
        boxSizing: 'border-box',
      }}
    >
      {numberParent}
    </div>
  );
}

Display.defaultProps = {
  numberParent: 0,
};

Display.propTypes = {
  numberParent: PropTypes.number,
};

export default Calculator;
