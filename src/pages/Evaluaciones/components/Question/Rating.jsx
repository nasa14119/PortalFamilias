import React, { useState } from 'react'

function Rating() {
    const [state, setState] = useState(Array(5).fill(false)); 
    const handleClick = (i) =>{
        setState( prev => prev.map((iterator, index) =>{
                return index <= i; 
            })
        )
    }
  return (
    <ul className='conteiner-stars'>
        <li onClick={() => handleClick(0)}>
            {
                state[0] ? 
                <i class="fa-solid fa-star" ></i>:
                <i class="fa-regular fa-star"></i>
            }
        </li>
        <li onClick={() => handleClick(1)}>
            {
                state[1] ? 
                <i class="fa-solid fa-star" ></i>:
                <i class="fa-regular fa-star"></i>
            }
        </li>
        <li onClick={() => handleClick(2)}>
            {
                state[2] ? 
                <i class="fa-solid fa-star" ></i>:
                <i class="fa-regular fa-star"></i>
            }
        </li>
        <li onClick={() => handleClick(3)}>
            {
                state[3] ? 
                <i class="fa-solid fa-star" ></i>:
                <i class="fa-regular fa-star"></i>
            }
        </li>
        <li onClick={() => handleClick(4)}>
            {
                state[4] ? 
                <i class="fa-solid fa-star" ></i>:
                <i class="fa-regular fa-star"></i>
            }
        </li>
    </ul>
  )
}

export default Rating