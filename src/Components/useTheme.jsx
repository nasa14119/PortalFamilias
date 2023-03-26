import React , {useEffect, useState, useContext} from 'react'
import {TheContext} from "../Global_Context"
function useTheme() {
  const {handleTheme} = useContext(TheContext)
  const Elememt = ({style = ""}) => {
    return(
      <span
        className={`${style} ToggleDefault`}
        onClick={() => handleTheme()}
    >
        {window.localStorage.getItem("theme") ? (
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