import { useState } from "react"

function Namechanger() {
    let [name , setname] = useState('maniya');
    function sanGin(){
        alert("good you have passed");
    }  
  return (
    <div>
      <p>{name}</p>
      <button onClick={sanGin}>click</button>
    </div>
  )
}

export default Namechanger
