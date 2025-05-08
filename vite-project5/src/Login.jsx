import { useState } from "react"

function Login() {
    let [login ,logout] = useState(true);
    function logot(){
        logout(!login);
    }
  return (
    <div>
            <div>
      {login && <p>login is sucessfull</p>}
      <button onClick={logot}>
        {login? 'logut' : 'login'}
      </button>
    </div>
    </div>
  )
}

export default Login
