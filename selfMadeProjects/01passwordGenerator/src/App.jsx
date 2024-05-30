import { useState } from 'react'
import './App.css'

function App() {

  const [password, setPassword] = useState("")
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [length, setLength] = useState(8)

  const passwordGenerator = () => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed) str+= "1234567890"

    if(charAllowed) str+= "-=!@#$%^&*()`~,./<>;':\"[]\}|"

    for(let i=0; i<10; i++){
      let char=Math.floor(Math.random()*str.length)
      pass+=str.charAt(char)
    }

    setPassword(pass)
  }


  return (
    <>
      <h1 className="my-4 mx-auto w-fit text-white text-4xl">Hello this is Password Generator</h1>
      <input className="my-4 mx-[50%] translate-x-[-50%] p-4 rounded-lg " type="text" value={password} readOnly/>
      
      <div className="mx-auto w-fit flex align-middle gap-2 text-white">

        <input className="cursor-pointer" type="range" min={4} max={16} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
        <label className="mt-4">Length: {length} |</label>

        <input className="cursor-pointer" type="checkbox" onChange={()=>{setNumberAllowed((prev)=> !prev)}} />
        <label className="mt-4">Number |</label>

        <input className="cursor-pointer" type="checkbox" onChange={()=>{setCharAllowed((prev)=> !prev)}}/>
        <label className="mt-4">Character</label>

        <button className="px-8 py-4 bg-blue-500 rounded-xl" onClick={passwordGenerator}>Generate Password</button>

      </div>

      
    </>
  )
}

export default App
