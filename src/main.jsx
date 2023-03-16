import React from 'react'
import ReactDOM from 'react-dom/client'
import "./pages/index.css"
import Home from "./pages/Home"
import Calificaciones from "./pages/Calificaciones"
import TablaNotas from "./Components/TablaNotas"
import Global_Context from "./Global_Context"
import Reglamento from './pages/Reglamento'
import Horario from "./pages/horario"
import Pago from "./pages/Pago"
import Login from "./pages/Login"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "PortalFamilias_Redisen-o",
    element: <Home />,
  },
  {
    path:"PortalFamilias_Redisen-o/calificaciones",
    element:<Calificaciones/>,
    children:[
      {
        path:"/PortalFamilias_Redisen-o/calificaciones/400",
        element:<TablaNotas what="400"/>
      },
      {
        path:"/PortalFamilias_Redisen-o/calificaciones/500",
        element:<TablaNotas what="500"/>
      },
      {
        path:"/PortalFamilias_Redisen-o/calificaciones/600",
        element:<TablaNotas what="600"/>
      }
    ]
  },
  {
    path:"PortalFamilias_Redisen-o/reglamento", 
    element:<Reglamento/>
  },
  {
    path:"PortalFamilias_Redisen-o/horario", 
    element:<Horario/>
  },
  {
    path:"PortalFamilias_Redisen-o/pago", 
    element:<Pago/>
  },
  {
    path:"PortalFamilias_Redisen-o/login", 
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
