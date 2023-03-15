import React from 'react'
import ReactDOM from 'react-dom/client'
import "./pages/index.css"
import Home from "./pages/Home"
import Calificaciones from "./pages/Calificaciones"
import TablaNotas from "./Components/TablaNotas"
import Global_Context from "./Global_Context"
import Reglamento from './pages/Reglamento'
import Horario from "./pages/Horario"
import Pago from "./pages/Pago"
import Login from "./pages/Login"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/calificaciones",
    element:<Calificaciones/>,
    children:[
      {
        path:"/calificaciones/400",
        element:<TablaNotas what="400"/>
      },
      {
        path:"/calificaciones/500",
        element:<TablaNotas what="500"/>
      },
      {
        path:"/calificaciones/600",
        element:<TablaNotas what="600"/>
      }
    ]
  },
  {
    path:"/reglamento", 
    element:<Reglamento/>
  },
  {
    path:"/horario", 
    element:<Horario/>
  },
  {
    path:"/pago", 
    element:<Pago/>
  },
  {
    path:"/login", 
    element:<Login/>
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global_Context>
      <RouterProvider router={router}/> 
    </Global_Context>
  </React.StrictMode>
)
