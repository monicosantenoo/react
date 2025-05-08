import { useState } from "react"


function Counter() {
    let [count , setcount] =useState(0); 
  return (
    <div>
      <p>we are using counter {count} </p>
      <button onClick={()=>setcount(count+1)}> clickme</button>
    </div>
  )
}

export default Counter
