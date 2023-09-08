import React from 'react'
import Header from "../../Components/Header"
import MainEvaluacion from "./components/MainEvaluacion"
import SendButton from './components/SendButton';

export function Maestros() {
  return (
    <>
      <Header />
      <main className="evaluacion-container">
      <div className="evaluacion-main">
        <header>
          <span style={{ gridArea: "image" }}>
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
              alt="Image of the theacher"
            />
          </span>
          <span style={{ gridArea: "title" }}>
            <h1>Profesor Apellido</h1>
          </span>
          <span
            style={{
              gridArea: "materia",
              marginInline: "5px",
              color: "var(--ibero)",
              fontSize: "14px",
            }}
          >
            Materia
          </span>
        </header>
        <MainEvaluacion/>
      </div>
      <footer className="index_display">
        <div>
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </footer>
    </main>
    <SendButton/>
    </>
  );
}