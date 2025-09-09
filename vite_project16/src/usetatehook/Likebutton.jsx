import React, { useState } from 'react'

function Likebutton() {
    const [like , setlike] = useState(false)
  return (
    <div>
         <button onClick={()=> setlike(!like)}>{like ? "❤️ Liked" : "🤍 Like"}</button>
    </div>
  )
}

export default Likebutton