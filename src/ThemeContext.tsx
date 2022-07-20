import React, {createContext, useContext, useState} from 'react'

const ThemeContext = createContext(true)
const ThemeContextUpdate = createContext(()=>{})

export function useTheme() {
  return useContext(ThemeContext)
}

export function useThemeUpdate() {
  return useContext(ThemeContextUpdate)
}

export function ThemeProvider({children}) {
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeContextUpdate.Provider value={toggleTheme}>
        {children}
      </ThemeContextUpdate.Provider>
    </ThemeContext.Provider>
  )
}

