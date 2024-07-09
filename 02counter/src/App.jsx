import {useState} from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // Rerendering : In React, re-rendering means updating the UI to reflect changes in the component's state or props. When a component's state or props change, React re-executes the component function to produce a new UI representation, then updates the DOM to match this new output. This process ensures that the UI stays in sync with the application's data.

  //let counter = 15

  const addValue = ()=>{
    // setCounter(counter + 1)
    if(counter === 20) return 
    setCounter(prev => prev + 1)
    // setCounter((prev)=>{
      //   prev + 1
      // })
      // if(counter === 20) return setCounter(counter) -- This line is equivalent to line 12 of if statement
  }

  const decreaseValue = ()=>{
    // setCounter(counter-1)
    if(counter === 0) return 
    setCounter(prev => prev - 1)
  }

  return (
    <>
      <h1>Chai Aur code</h1>
      <h2>Counter value: {counter}</h2> 
      {/* {counter} is an evaluated expression */}

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={decreaseValue}>Decrease value {counter}</button>

    </>
  )
}

export default App

// React.js reacts on varaibles updation thats why its called react 
// React.js control UI updation