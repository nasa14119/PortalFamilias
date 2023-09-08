import React, {Fragment} from 'react'
import {useRouteError} from "react-router-dom"
import "./styles.css"
import Header from '../Header';
function Error() {
    // const error = useRouteError();
  return (
    <Fragment>
      <Header/>
    <div className='errorContainer'>
      <span>
        404
      </span>
      <span>
        The page your looking for is not found
      </span>
    </div>
    </Fragment>
  )
}

export default Error