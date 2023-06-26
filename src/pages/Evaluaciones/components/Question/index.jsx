import React from 'react'
import "./styles.css"
import Rating from './Rating'
function Question({body}) {
  return (
    <li className='conteiner-question'>
        <span>
            ¿{body}?
        </span>
        <Rating />
    </li>
  )
}

export default Question