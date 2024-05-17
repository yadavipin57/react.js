import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: 'Vipin',
    age: 23
  }

  let newArr = [1,2,3,4,5]

  let cardImageUrlArr = [
    './imgs/1.jpg', './imgs/2.jpg', './imgs/3.jpg'
  ]

  return (
    <>
      <Navbar buttonText='Click Me'/>  

      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>

      <Card username='Chai aur code' imageUrl={cardImageUrlArr[0]} someObj={myObj} newObj={newArr}/>
      <Card username='Vipin' btnText='Click me'/>
      <Card username='Suraj' btnText='Visit me'/>

    </>
  )
}

export default App
