import React from 'react'

function Userard(props) {
  return (
    <>
    <h1 className="bg-lime-600"> hello {props.name}</h1>
    <p className='bg-blue-500'>hyy {props.age}</p>
    </>
  )
}

export default Userard