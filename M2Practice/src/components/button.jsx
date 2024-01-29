import '../App.css'
import PropTypes from 'prop-types'

export default function Button({symbol, handleClick}) {
    return (
        <div className='buttons'onClick={() => handleClick(symbol)}>
          {symbol}
        </div>
      );
  }

  Button.propTypes = {
    symbol: PropTypes.string.isRequired,
    handleClick:PropTypes.func.isRequired
  };
