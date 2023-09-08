import {createRoot} from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import Global_Context from "./Global_Context";
const root = createRoot(document.getElementById("root")); 
root.render(
  <BrowserRouter>
    <Global_Context>
      <App/>
    </Global_Context>
  </BrowserRouter>
)