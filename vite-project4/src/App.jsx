import React from "react"
import { Navbar} from "./components/Navbar"; 
import { Footer } from "./components/Footer";
import Card from "./components/Card";


function App() {
  return (
    <>
     <Navbar/>
     <Card title="card1" description="hey i am there"/>
     <Footer/>
    </>
  )
}

export default App
