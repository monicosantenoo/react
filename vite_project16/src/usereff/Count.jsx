import React, { useRef, useState } from 'react'

function Count() {
const [count , setCount] = useState(0);
const renderCount = useRef(0);

renderCount.current +=1;
  return (
    <div>
      <p>Clicked {count} times</p>
      <p>Component rendered {renderCount.current} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Count