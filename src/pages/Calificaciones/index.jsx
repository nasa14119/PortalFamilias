import React ,{Fragment} from 'react'
import {Outlet, Link, NavLink} from "react-router-dom"
import Header from "../../Components/Header"
import "./styles.css"
export function Calificaciones() {
  let active = {
    color: "var(--extra_blue)", 
    border: "none"
  }
  return (
    <Fragment>
      <Header/>
      <span>
        <Link to="/" className="GoBack">
          <i className="fa-solid fa-angles-left"></i> Ir a la pagina principal
        </Link>
      </span>
      <main className="calificaciones_conteiner">
        <nav className="year_nav">
          <h2 className="header_nav">Años</h2>
          <NavLink to="./400" style={({isActive})=> isActive ? active:undefined}>400</NavLink>
          <NavLink to="./500" style={({isActive})=> isActive ? active:undefined}>500</NavLink>
          <NavLink to="./600" style={({isActive})=> isActive ? active:undefined}>600</NavLink>
        </nav>
        <Outlet />
      </main>
    </Fragment>
  );
}
