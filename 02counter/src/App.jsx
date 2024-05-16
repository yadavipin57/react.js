import {useState} from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  //let counter = 15

  const addValue = ()=>{
    setCounter(counter + 1)
    if(counter === 20) return setCounter(counter)
  }

  const decreaseValue = ()=>{
    setCounter(counter-1)
    if(counter === 0) return setCounter(counter)
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