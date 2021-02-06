import React from 'react'
import ThemeContext from './themeContext'
import "tailwindcss/tailwind.css";

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext)
  
    function isDark() {
      return theme === "dark"
    }
    return (
      <div className="float-right mr-3 my-2">
          <label 
    for="toogleA"
    className="flex items-center cursor-pointer"
  >
    <div className="relative">
      <input id="toogleA" type="checkbox" className="hidden" checked={isDark()} onChange={e => setTheme(e.target.checked ? "dark" : "light")} />
      <div
        className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
      ></div>
      <div
        className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
      ></div>
    </div>
    <div
      className="ml-3 font-medium"
    >
      <span class="text-black dark:text-white">🌙</span>
    </div>
  </label>
        <style jsx>
        {`
        .toggle__dot {
          top: -.25rem;
          left: -.25rem;
          transition: all 0.3s ease-in-out;
        }

        input:checked ~ .toggle__dot {
          transform: translateX(100%);
          background-color: #0A0E14;
        }
        `}
        </style>
      </div>
      
    )
  }

export default Toggle