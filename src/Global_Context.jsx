import React, {createContext, useEffect, useState} from 'react'
export const TheContext = createContext(null); 
function Global_Context(props) {
    const [theme, setTheme] = useState(() => {
      const localTheme = window.localStorage.getItem("theme") 
      return localTheme ? localTheme : "light"; 
    }
    );
    const CssChangeTheme = () => {
      const CSSvariable = document.documentElement;
      if (theme === "dark") {
        CSSvariable.style.setProperty("--color", "#fff");
        CSSvariable.style.setProperty("--background", "var(--dark_background)");
      } else {
        CSSvariable.style.setProperty("--color", "#000");
        CSSvariable.style.setProperty("--background", "var(--light_background)");
      }
      window.localStorage.setItem("theme", theme); 
    }
    useEffect(CssChangeTheme, [theme])
    const handleTheme = () => {
        setTheme(prev => { 
          return prev === "dark" ? "light" : "dark"; 
        }); 
    }; 
    const OBJCONTEXT = {
      handleTheme, 
      theme
    }
  return (
    <TheContext.Provider value={OBJCONTEXT}>{props.children}</TheContext.Provider>
  )
}

export default Global_Context