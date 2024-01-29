import '../App.css'
import PropTypes from 'prop-types';

export default function Input({input, result}) {
    return (
        <div className='inputWrapper'>
           <div className='result'>
            <h1> {result} </h1>
           </div>

           <div className='text'>
            <h3> {input}  </h3>
           </div>
        </div>
    
    )

}

Input.propTypes = {
    input: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired,
  };