import React,{useState} from 'react'

function Theme() {
  const [theme, setTheme] = useState("light");

  // toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${theme}`}>
      <h1>{theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}</h1>
      <p>This is a {theme} themed app.</p>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  );
}

export default Theme