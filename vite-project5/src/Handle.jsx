import React from 'react'

function Handle() {
 function handleClick(){
    alert("woo congratulation for you baby")
 }
    return (
    <div>
      <button onClick={handleClick} >dontclick</button>
    </div>
  )
}

export default Handle
