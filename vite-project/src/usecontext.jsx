import React, { createContext } from 'react'
const ThemeContext = createContext()

function Themeprovider() {
  const [theme, settheme] = useState("light")


  
  return (
        <ThemeContext.Provider value={{theme}}>
            
        </ThemeContext.Provider>

  )
}
export default Themeprovider