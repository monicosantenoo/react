import React from "react";

function Card({username,btnText}) {
   
    return(
    
    <div className="">
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://media.istockphoto.com/id/1253270999/photo/canadian-great-horned-owl.webp?b=1&s=612x612&w=0&k=20&c=eGE5iNTYSpVv_hcuwRTzXbBER14Apd3GqrI71KKjypc=" alt="" width="384" height="512"/>
  <div className="pt-6 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {btnText || "hhhh"}
      </div>
    </figcaption>
  </div>
</figure>

    </div>
    )
    
}

export default Card