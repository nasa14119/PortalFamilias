import React , { useContext, useState} from 'react'
import {TheContext} from "../Global_Context"
function useTheme() {
  const {handleTheme, theme} = useContext(TheContext)
  const [isDark, setTheme] = useState(() => {
    if(theme) return theme === "light";
    return false;  
  })
  const handleClick = () => {
    setTheme(prev => !prev)
    handleTheme(); 
  }
  const Elememt = ({style = ""}) => {
    return(
      <span
        className={`${style} ToggleDefault`}
        onClick={handleClick}
    >
        {isDark ? (
        <i className="fa-solid fa-moon"></i>
        ) : (
        <i className="fa-solid fa-sun"></i>
        )}
    </span>
    )
  };
  return Elememt;
}

export default useTheme