import React from 'react'
import "./styles.css"
import { useNavigate } from 'react-router-dom'

function SendButton() {
    const navigate = useNavigate()
  return (
    <div className='send-button'>
        <span onClick={() => navigate("/")}>
            Send
        </span>
    </div>
  )
}

export default SendButton