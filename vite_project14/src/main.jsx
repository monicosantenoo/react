import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Lists from './Lists.jsx'
import ClickEven from './ClickEven.jsx'
import Myform from './Myform.jsx'
import FormTwo from './FormTwo.jsx'
import Formthre from './Formthre.jsx'
import Formfive from './Formfive.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Lists></Lists> */}
    {/* <ClickEven></ClickEven> */}
    {/* <Myform></Myform> */}
    {/* <FormTwo></FormTwo> */}
   {/* <Formthre></Formthre> */}
   <Formfive></Formfive>
  </StrictMode>,
)
