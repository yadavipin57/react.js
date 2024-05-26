
import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("olive")

  return (
    <>

    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

      <div>
        <button className="m-4 outline-none px-4 py-1 rounded-full shadow-lg text-white border-solid border-2 border-sky-0" onClick={()=> setColor("olive")} style={{backgroundColor: "olive"}}>
          Reset
        </button>
      </div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" onClick={()=> setColor("red")} style={{backgroundColor: "red"}}>Red
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" onClick={()=> setColor("green")} style={{backgroundColor: "green"}}>Green
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" onClick={()=> setColor("blue")} style={{backgroundColor: "blue"}}>Blue
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" onClick={()=> setColor("orange")} style={{backgroundColor: "orange"}}>Orange
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" onClick={()=> setColor("purple")} style={{backgroundColor: "purple"}}>Purple
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" onClick={()=> setColor("crimson")} style={{backgroundColor: "crimson"}}>Crimson
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" onClick={()=> setColor("brown")} style={{backgroundColor: "brown"}}>Brown
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" onClick={()=> setColor("yellow")} style={{backgroundColor: "yellow"}}>Yellow
          </button>
          <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" onClick={()=> setColor("violet")} style={{backgroundColor: "violet"}}>Violet
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