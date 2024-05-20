
import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("olive")

  return (
    <>

    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full shadow-lg" onClick={()=> setColor("red")} style={{backgroundColor: "red"}}>Red
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg" onClick={()=> setColor("green")} style={{backgroundColor: "green"}}>Green
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg" onClick={()=> setColor("blue")} style={{backgroundColor: "blue"}}>Blue
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg" onClick={()=> setColor("orange")} style={{backgroundColor: "orange"}}>Orange
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg" onClick={()=> setColor("purple")} style={{backgroundColor: "purple"}}>Purple
          </button>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App

// onClick expects you to pass the function 
// if parameter is passed in the onclick function then the returned value of the fucntion is assigned into the onClick