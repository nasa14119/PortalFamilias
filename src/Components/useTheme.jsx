import React , { useContext} from 'react'
import {TheContext} from "../Global_Context"
function useTheme() {
  const {handleTheme, isDark} = useContext(TheContext)
  const Elememt = ({style = ""}) => {
    return(
      <span
        className={`${style} ToggleDefault`}
        onClick={() => handleTheme()}
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