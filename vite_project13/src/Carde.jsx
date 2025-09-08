import React from 'react'

function Carde(props) {
  return (
    <div>
     <ul>
       { props.items.map((item,i) => (
            <li key={i}>{item}</li>
        ))}
     </ul>
    </div>
  )
}

export default Carde