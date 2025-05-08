import { useState ,useEffect} from 'react'
import './App.css'
import Seat from './components/Seat';


function App() {
  const [count, setCount] = useState(0);
  const [color , setColor] = useState(0)
  useEffect(() => {
 alert("het ths is changed ");
}, [])

useEffect(() => {
  alert("het ths is update");
  setColor(color + 1)
  }, [count])

  return (
    <>
     <div>
    <Seat color={"red" + "navy blue" + color} />
     <h1>Then  is value of count {count} </h1>
      <button onClick={()=>setCount(count + 2)}>click me</button>
     </div>

    </>
  )
}

export default App
