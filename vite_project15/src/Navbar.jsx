import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
function Navbar() {
  return (
    <>
    <nav>
        <div className="navbar">
        <div className="logo">
            <h1> code with monico </h1>
        </div>
        <div className="links">
        <Link to="/">Home</Link>
        <Link to="/">Course</Link>
        <Link to="/">Tutorials</Link>
        <Link to="/">Blogs</Link>
        <Link to="/">Notes</Link>
        </div>
        <div className="left">
        <input type="text" placeholder='seacrh' name="" id="" />
        <button>login</button>
        <button>sign-up</button>
        <button>🌙</button>
        </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar