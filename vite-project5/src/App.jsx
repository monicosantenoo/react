import React from 'react'
import Welcome from './Welcome'
import { Chprops } from './Chprops'
import Greeting from './Greeting'
import Counter from './Counter'
import Like from './Like'
import Handle from './Handle'
import Namechanger from './Namechanger'
import Showtext from './Showtext'
import Login from './Login'
function App() {
  return (
    <div>
      <Welcome/>
      <Chprops name="manish" />
      <Greeting greet="goodmorning"/>
      <Counter/>
      <Like/>
      <Handle/>
      <Namechanger/>
      <Showtext/>
      <Login/>
    </div>
  )
}

export default App

