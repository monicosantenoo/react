import { useState ,useEffect} from 'react'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());


  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentTime(new Date().toLocaleTimeString());
    },1000)
    return () => clearInterval(interval)
  },[]);
  
  return (
  <>
  <h1>hello monico santenoo</h1>
  <h2>{currentTime}</h2>
  </>
  )
}

export default App
