import PropTypes from 'prop-types';

function GrayButton(props) {
  const { string } = props;
  const { big } = props;
  const { clickCalc } = props;
  return (
    <button
      type="button"
      onClick={() => { clickCalc(string); }}
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
        paddingLeft: big ? 8 : 0,
        boxSizing: 'border-box',
      }}
    >
      {string}
    </button>
  );
}

GrayButton.defaultProps = {
  string: 0,
  big: false,
  clickCalc: () => {},
};

GrayButton.propTypes = {
  string: PropTypes.string,
  big: PropTypes.bool,
  clickCalc: PropTypes.func,
};

export default GrayButton;
