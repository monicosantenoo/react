import { useState } from "react"

function Like() {
    let [count,counter]= useState(0);
  return (
    <div>
      <h1>like{count}</h1>
      <button onClick={()=>counter(count+1)}>like</button>
      <button onClick={()=>counter(count-1)}>dislike</button>
    </div>
  )
}

export default Like
