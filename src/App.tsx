import React from 'react'
import FunctionContextComponent from './FunctionContextComponent'
import ClassContextComponent from './ClassContextComponent'
import { ThemeProvider } from "./ThemeContext"

function App() {

  return (
    <div>
      <ThemeProvider>
        <FunctionContextComponent />
        {/* <ClassContextComponent /> */}
      </ThemeProvider>
    </div>
  )
}

export default App