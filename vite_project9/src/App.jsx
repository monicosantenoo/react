import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName]= useState("enter the name")
  const handleClick = ()=>{
    alert("hello my jaan ")
  }
  const handleMouseClick = ()=>{
    alert("heyi am mouse hover ")
  }
  const handleChange = (e)=>{
    setName(e.target.value)
  }
  return (
    <>
   <div className="button">
    <button onClick={handleClick}>Click me</button>
   </div>
   <div className="red" onMouseOver={handleMouseClick}>
    i am a red div 
   </div>
   <input type="text" onChange={handleChange} value={name}  />
    </>
  )
}

export default App
