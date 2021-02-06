// components/ToggleDarkMode.tsx
import React, { useEffect, useState } from 'react'

const ToggleDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode(true)
      document.querySelector('html')?.classList.add('dark')
    } else {
      setDarkMode(false)
      document.querySelector('html')?.classList.remove('dark')
    }
  }, [darkMode])

  const handleChangeDarkMode = () => {
    if (darkMode) {
      localStorage.theme = 'light'
      setDarkMode(false)
    } else {
      localStorage.theme = 'dark'
      setDarkMode(true)
    }
  }

  return (
    <div className="flex">
      <div className="mr-2 text-xs">
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </div>
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          checked={darkMode}
          className="toggle-checkbox"
          onChange={handleChangeDarkMode}
        />
        <label htmlFor="toggle" className="toggle-label">
          toggle
        </label>
      </div>
      <div className="text-xs">
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
    </div>
  )
}

export default ToggleDarkMode