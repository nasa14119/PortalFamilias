import { NewsCarrusel } from "./NewsCarrusel";

export function NewsPanel(){
  return (
    <div className="OnlyCompHome" style={{ boxShadow: window.localStorage.getItem("theme")&& "none" }}>
      <h3>Noticias</h3>
      <NewsCarrusel delay={10}/> 
    </div>
  )
}