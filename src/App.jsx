// ./src/App.jsx
import './App.css'
import Homepage from './pages/Homepage'
import { myContext } from './context/myContext'
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState("white");
  return (
    <div style={{backgroundColor:theme}}>
      <myContext.Provider value={{theme, setTheme}}>
        <h1>기말고사</h1>
        <Homepage />
      </myContext.Provider>
    </div>
  )
}

export default App
