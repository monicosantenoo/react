import React, { useEffect } from 'react'

function Cleanmu() {
    useEffect(()=>{
        console.log("component mount");
        return ()=>{
            console.log("component unmount ");
        }
    },[])
  return (
    <div>
        <h2>check console log </h2>
    </div>
  )
}

export default Cleanmu