import { Route, Routes } from "react-router-dom";
import Error from "./Components/Error"
import {Home} from "./pages/Home"
import {Calificaciones, Element400, Element500, Element600} from "./pages/Calificaciones"
import {Reglamento} from "./pages/Reglamento.jsx"
import {Horario} from "./pages/Horario"
import {Pago} from "./pages/Pago"
import {Login} from "./pages/Login"
import {ElementMaestros, ElementTutores} from "./pages/Evaluaciones"
import "./assets/index.css"
export function App() {
  return (
    <Routes>
        <Route element={<Home/>} index/>
        <Route path="/calificaciones" element={<Calificaciones/>}>
          <Route element={<Element400/>} path="400"/>
          <Route element={<Element500/>} path="500"/>
          <Route element={<Element600/>} path="600"/>
        </Route>
        <Route path="/reglamento" element={<Reglamento/> }/> 
        <Route path="/horario" element={<Horario/> }/> 
        <Route path="/pago" element={<Pago/> }/> 
        <Route path="/login" element={<Login/> }/> 
        <Route path="/evaluacion">
          <Route element={<ElementTutores/>} path="tutor"/>
          <Route element={<ElementMaestros/>} path="profesor"/>
        </Route>
        <Route element={<Error/>} path="*"/>
    </Routes>
  )
}