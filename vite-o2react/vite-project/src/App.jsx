import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter] = useState(5)
 
  const addValue = ()=>{
    console.log(counter)
    if(counter>=0)
     setCounter(counter++)
  }
  const removeVal = ()=>{
    console.log(counter)
    if(counter>0)
    setCounter(counter--)
  }
  return (
    <>
     <h1>react with bakati </h1>
     <h3>counter value = {counter}</h3>
     <button onClick={addValue} > add value </button>
     <br/>
     <button onClick={removeVal}> remove value</button>

    </>
  )
}

export default App
