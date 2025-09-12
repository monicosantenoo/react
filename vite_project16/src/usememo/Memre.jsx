import React, { useState } from 'react'

function Memre() {
    const [count , setcount]= useState(0);
    const [input,setinput] = useState("");
    const double = (num)=>{
        console.log("inside the tak");
        for (let index = 0; index < 100; index++) {  
        }
        return num*2;
    }

 let num = double(input);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> setcount(count +1)} >increment</button>
      <input type="number" placeholder='enter the number' value={input}  onChange={(e)=>setinput(e.target.value)}/>
   <div>
    <h3>{num}</h3>
   </div>
    </div>
  )
}

export default Memre