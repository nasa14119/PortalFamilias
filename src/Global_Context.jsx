import React, {createContext, useEffect, useState} from 'react'
export const TheContext = createContext(null); 
function Global_Context(props) {
    const [isDark, setTheme] = useState(window.localStorage.getItem("theme") === "true");
    const CssChangeTheme = () => {
      const CSSvariable = document.documentElement;
      if (window.localStorage.getItem("theme") === "true" ) {
        CSSvariable.style.setProperty("--color", "#fff");
        CSSvariable.style.setProperty("--background", "var(--dark_background)");
      } else {
        CSSvariable.style.setProperty("--color", "#000");
        CSSvariable.style.setProperty("--background", "var(--light_background)");
      }
    }
    useEffect(() => {
      CssChangeTheme(); 
    }, [isDark]); 
    const handleTheme = () => {
      try{
        setTheme(prev => { 
          return !prev; 
        }); 
        window.localStorage.setItem("theme", isDark); 
      }catch(error){
        console.log(error); 
      }
    }; 
    const OBJCONTEXT = {
      handleTheme, 
    }
  return (
    <TheContext.Provider value={OBJCONTEXT}>{props.children}</TheContext.Provider>
  )
}

export default Global_Context