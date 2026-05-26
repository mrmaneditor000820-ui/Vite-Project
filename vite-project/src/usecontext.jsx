import React, { createContext } from 'react'
const ThemeContext = createContext()

function Themeprovider() {
  const [theme, settheme] = useState("light")
  
  const toogleTheme = () => {
    if(theme=== "light"){
      settheme("dark")
    }
    if(theme === "dark"){
      settheme("light")
    }
  };


  return (
        <ThemeContext.Provider value={{theme,toogleTheme}}>
            
        </ThemeContext.Provider>

  )
}
export default Themeprovider