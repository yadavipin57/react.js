import { useState } from 'react'
import './App.css'

function App() {

  const [password, setPassword] = useState("")

  const passwordGenerator = ()=> {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=`~"

    for(let i=1; i<=10; i++){
      let char=Math.floor(Math.random()*str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }

  const [buttonColor, setButtonColor] = useState("blue");

  const changeButtonColor = ()=>{
    setButtonColor('red')
    passwordGenerator()
  }


  return (
    <>
      <h1 className="my-4 mx-auto w-fit text-white text-4xl">Hello this is Password Generator</h1>
      <input className="my-4 mx-[50%] translate-x-[-50%] p-4 rounded-lg " type="text" value={password} readOnly/>
      <button onClick={changeButtonColor} className="my-4 mx-[50%] translate-x-[-50%] p-4 w-[200px] bg-blue-500 text-white rounded-lg">Generate Password</button>
    </>
  )
}

export default App
