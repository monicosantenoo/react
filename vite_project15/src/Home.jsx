import React from 'react'
import "./home.css"
function Home() {
  return (
    <>
      <div className="hero">
        <section class="hero">
          <h1>Welcome to Code with Monico</h1>
          <p>Learn coding with tutorials, blogs, notes, and courses tailored for you.</p>
          <button>Get Started</button>
        </section>


        <section class="features">
          <div class="feature">
            <h2>📘 Tutorials</h2>
            <p>Step-by-step coding tutorials for beginners and advanced learners.</p>
          </div>
          <div class="feature">
            <h2>📝 Notes</h2>
            <p>Well-structured notes for quick revision and deep understanding.</p>
          </div>
          <div class="feature">
            <h2>💻 Projects</h2>
            <p>Build real-world projects to strengthen your coding skills.</p>
          </div>
        </section>

        <footer>
          <p>© 2025 Code with Monico | All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

export default Home