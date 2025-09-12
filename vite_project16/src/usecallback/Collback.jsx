import React, { useCallback, useState } from 'react'
import Children from './Children';
function Collback() {
    const [count , setCounr] = useState(0);
const handleClick = useCallback(
  () => {
    setCounr(count+1);
  },[count],
)

 
  return (
    <div>
       <h1>the ha ha a ha {count}</h1>
       <button onClick={handleClick} >click me</button>

       <Children name="buttonName" handleClick={handleClick}/>
    </div>
  )
}

export default Collback