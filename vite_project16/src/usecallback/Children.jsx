import React from 'react'

const Children = React.memo(function Children(props){
     console.log("button render again");
  return <button onClick={props.handleClick}>{props.name}</button>;
})

export default Children