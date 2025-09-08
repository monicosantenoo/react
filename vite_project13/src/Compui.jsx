import React from 'react'

function Welcome({name}) {
    return <h1>hello {name}</h1>;
}
function Compui() {
  return (
    <div>
     <Welcome name ="sunny"></Welcome>
    </div>
  )
}

export default Compui