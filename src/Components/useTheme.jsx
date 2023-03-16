import React , {useEffect, useState, useContext} from 'react'
import {TheContext} from "../Global_Context"
function useTheme() {
  const {isDark, handleTheme} = useContext(TheContext)
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