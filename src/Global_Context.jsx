import React, {createContext, useEffect, useState, useMemo} from 'react'
export const TheContext = createContext(null); 
function Global_Context(props) {
    const [isDark, setTheme] = useState(true);
    const CssChangeTheme = () => {
      const CSSvariable = document.documentElement;
      if (isDark) {
        CSSvariable.style.setProperty("--color", "#fff");
        CSSvariable.style.setProperty("--background", "var(--dark_background)");
      } else {
        CSSvariable.style.setProperty("--color", "#000");
        CSSvariable.style.setProperty("--background", "var(--light_background)");
      }
    }
    const handleTheme = () => {setTheme(prev => !prev); CssChangeTheme()}; 
    const OBJCONTEXT = {
      isDark, 
      handleTheme, 
    }
  return (
    <TheContext.Provider value={OBJCONTEXT}>{props.children}</TheContext.Provider>
  )
}

export default Global_Context