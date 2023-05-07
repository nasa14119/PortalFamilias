import React, {Fragment} from 'react'
import {useRouteError} from "react-router-dom"
import "./styles.css"
import Header from '../Header';
function Error() {
    const error = useRouteError();
  return (
    <Fragment>
      <Header/>
    <div className='errorContainer'>
      <span>
        {error.status}
      </span>
      <span>
        {error.statusText}
      </span>
    </div>
    </Fragment>
  )
}

export default Error