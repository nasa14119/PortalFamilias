import React, {createContext, useEffect, useState} from 'react'
export const TheContext = createContext(null); 
function Global_Context(props) {
    const [theme, setTheme] = useState(() => {
      const localTheme = window.localStorage.getItem("theme") 
      return localTheme ? localTheme : "light"; 
    }
    );
    useEffect(()=>{
      const body = document.body;
      if (theme === "dark") {
        body.classList.add("dark-theme");
        body.classList.remove("light-theme");
      } else {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
      }
      window.localStorage.setItem("theme", theme); 
    }, [theme]); 
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