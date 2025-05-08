import { useEffect } from 'react'

function Seat({color}) {
    useEffect(() => {
      alert(" mai beautifull king ")

    }, [color])
    
  return (
    <div>
    <h1> ia ma a navbar {color} heeheheh</h1>
    </div>
  )
}

export default Seat
