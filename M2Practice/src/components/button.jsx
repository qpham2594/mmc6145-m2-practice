import '../App.css'

// setting up the values based on how the calculator look
export default function Button() {
    const operation = [
      ["AC", "+/-", "%", "/"],
      [7, 8, 9, "*"],
      [4, 5, 6, "-"],
      [1, 2, 3, "+"],
      [0, ".", "="]
    ];

    // function to handle button clicking and making sure it's registering what is being clicked
    function onButtonClick(value) {
        console.log(`Button clicked: ${value}`)

    }

    // taking the firs index of the first array, using map to iterate the rows, and then using "_" to ignore that value
    // then to create the column, create the div, and use map again to iterate the columns using the numberIndex, which is each value of that arrays
    // then for the button, specify where the function is carrying out the action, and then repeat that for UI
    return (
        <div className='buttons'>
          {operation[0].map((_, numberIndex) => (
            <div key={numberIndex} className='columnBtn'>
              {operation.map((row, rowIndex) => (
                <div key={`${rowIndex}-${numberIndex}`} className='bttn'>
                  <button onClick={() => onButtonClick(row[numberIndex])}>{row[numberIndex]}</button>
                </div>
              ))}
            </div>
          ))}
        </div>
      );
      
  }