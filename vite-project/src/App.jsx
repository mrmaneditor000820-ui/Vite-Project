import React, { useContext } from 'react'
import { ThemeContext } from './Themeprovider'
import "./App.css"


const App = () => {

  const {theme,toggleTheme} = useContext(ThemeContext)
  console.log("theme=>", theme,toggleTheme);
  

  return (
    <div id='main' style={{  backgroundColor:theme === "Dark" ? "black" : "white",
      color: theme === "light" ? "black" : "white",}}>
      <div id='main2'>
        <h2>NAVBAR</h2>
      </div>
      <div><h1>THEME CHANGER</h1></div>

    <div style={{
      backgroundColor:theme === "Dark" ? "black" : "white",
      color: theme === "light" ? "black" : "white",
      height:"300px",margin:"100px auto",padding:"0px",
      border:"2px solid blue",borderRadius:"20px",
      width:"700px",textAlign:"center"

    }}>
    <h1 style={{fontSize:"50px",fontFamily:""

    }}>ABDUL ---------- REHMAN</h1>
    <button onClick={toggleTheme}>{theme }MODE</button>
    </div>
    <div className='footer'>FOOTER</div>
    </div>
  
  )
}

export default App