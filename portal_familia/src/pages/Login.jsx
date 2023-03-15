import React from 'react'
import "./css/login.css"
import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate()
  return (
    <div className='login'>
        <main>
            <h1>Portal Familias</h1>
            <form onSubmit={e=> {e.preventDefault();  navigate("/")}}>
                <div className='login-first'>
                    <label htmlFor="username">Usuario</label>
                    <label htmlFor="digito">Digito</label>
                    <input type="text" name="username" id="username"/>
                    <input type="number" min={0} max={10} id="digito"/>
                </div>
                <div className='login-last'>
                    <label htmlFor="contraseña">Contraseña</label>
                    <input type="password" name="password" id="contraseña"/>
                </div>
                <button type="submit">Entrar</button>
            </form>
            <span className='extra_info'>* Si eres estudiante tienes que agregar una A antes del numero de estudiante</span>
        </main>
    </div>
  )
}

export default Login