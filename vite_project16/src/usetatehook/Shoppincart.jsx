import React, { useState } from 'react'

function Shoppincart() {
    const [quantity ,setquantity]= useState(0);
  return (
    <div>
       <h1>item quantity is {quantity}</h1>
       <button onClick={()=> setquantity(quantity+1)}>+</button>
       <button onClick={()=> setquantity(quantity-1)}>-</button>
    </div>
  )
}

export default Shoppincart