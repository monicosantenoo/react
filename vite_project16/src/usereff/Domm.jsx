import React, { useRef } from 'react'

function Domm() {
    const inputRef = useRef(null);

    const focusInput = ()=>{
        inputRef.current.focus();
    }
  return (
    <>
     <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </>
  )
}

export default Domm