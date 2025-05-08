import { useState } from "react"

function Showtext() {
    let [isVisible , settvisible] =useState(true);
    function toggle(){
    settvisible(!isVisible);
    } 
  return (
    <div>
          <div>
      {isVisible && <p>Hello, World!</p>}
      <button onClick={toggle}>
        {isVisible ? 'Hide Text' : 'Show Text'}
      </button>
    </div>
    </div>
  )
}

export default Showtext
