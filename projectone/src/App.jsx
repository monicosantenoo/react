
import { useState } from 'react';
import './App.css'

function App() {
  const [color , setcolor] =useState("olive") 
  return (
   <>
   <div className='w-full h-screen duration-200' style={{backgroundColor :color}} >
    <div className=' fixed flex flex-wrap  justify-center buttom-12 inset-x-0 px-2'>

      <div className=' flex flex-wrap  align-center gap-3 shadow-lg bg-white '>
        <button onClick={()=> setcolor("red")} className='outline-none p-5 rounded-full ' style={{backgroundColor:"red"}} > red </button>
        <button  onClick={()=> setcolor("blue")} className='outline-none p-4 rounded-full' style={{backgroundColor:"blue"}} > blue </button>
        <button onClick={()=> setcolor("green")} className='outline-none p-4 rounded-full' style={{backgroundColor:"green"}} > green </button>
         </div>
    </div>
   </div>
   
   </>
  )
}

export default App
