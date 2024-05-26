import { useState, useCallback } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "`~!@#$%^&*()_+-=<>,.?/:\";'{}[]\|"

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass = str.charAt(char)
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-800">

        <h1 className="mb-4 text-4xl text-center text-white">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text" 
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder='Password'
          readOnly
          />
          <button className="bg-blue-700 text-white p-2">Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range"
            min={5}
            max={16}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=> !prev)
            }}
            />
            <label>Numbers</label>
          </div>
          <div className="felx items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={()=>{
              setCharAllowed((prev)=> !prev)
            }}
            />
            <label>Character</label>
          </div>
        </div>

      </div>
      
    </>
  )
}

export default App


// Video timestamp is 32 min 