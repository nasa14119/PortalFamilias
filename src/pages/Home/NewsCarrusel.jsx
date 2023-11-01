import { useEffect, useState } from "react";
import { NewsControls } from "../../Components/NewsControls";

const imgs = [
  {
    noticia: "Noticia 1", 
    src:"https://picsum.photos/id/10/1500/1300?"
  },
  {
    noticia: "Noticia 2", 
    src:"https://picsum.photos/id/32/1500/1300?"
  },
  {
    noticia: "Noticia 3", 
    src:"https://picsum.photos/id/16/1500/1300?"
  },
  {
    noticia: "Noticia 4", 
    src:"https://picsum.photos/id/42/1500/1300?"
  },
  {
    noticia: "Noticia 5", 
    src:"https://picsum.photos/id/52/1500/1300?"
  }
]
export function NewsCarrusel({delay}) {
  const start = 5; 
  const [index, setIndex] = useState(start - 1); 
  const [loading, setLoad] = useState(false); 
  useEffect(()=>{
    const changeNews = setTimeout(handelClickRight, delay * 1000); 
    return () => clearTimeout(changeNews); 
  },[loading])
  const changeImage = () =>{
    setLoad(prev => true)
    setTimeout(() => setLoad(prev => false), 20)
  }
  const handleClickDot = (newState) => {
    changeImage()
    setIndex(prev => newState)
  }
  const handelClickRight= () => {
    changeImage()
    setIndex(prev => prev + 1 >= 5 ? 0 : prev + 1); 
  }
  const handelClickLeft= () => {
    changeImage()
    setIndex(prev => (prev - 1) < 0 ? start - 1 : prev - 1); 
  }
  if(!imgs) return ; 
  return (
    <div className="news-carrusel-container">
      <NewsControls left={handelClickLeft} right={handelClickRight} />
      <main className="news-carrusel-main">
        <h3 className="news-carrusel-header">{imgs[index].noticia}</h3>
        <p className="news-carrusel-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          similique quos aliquid vel facere quidem a corrupti fuga eos dolorum.
        </p>
        <div className="img">
          {!loading && <Img src={imgs[index].src}/> }
        </div>
      </main>
      <DotsCount index={index} start={start} func={handleClickDot} />
    </div>
  );
}
function Img({src}){
  return (
    <img
      src={src}
      alt="img-noticia"
      onLoad={(e) => {
        e.target.classList.add("show");
      }}
      loading="lazy"
    />
  );
}
function DotsCount({index, func, start}){ 
  return (
    <div className="news-carrusel-dots-container">
      {
        Array(start).fill(null).map((e, i)=>(
          <span className="dot" key={`element-${i}`} onClick={() => func(i)}>
            {i === index ? <WhiteDot/> : <FillDot/>}
          </span>
        ))
      }
    </div>
  );
}
function WhiteDot(){
  return (
    <svg fill="var(--ibero-dark)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fillRule="evenodd"
          d="M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0 1.5a6 6 0 100-12 6 6 0 000 12z"
        ></path>
      </g>
    </svg>
  );
}
function FillDot(){
  return (
    <svg fill="var(--ibero-dark)" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M12 18a6 6 0 100-12 6 6 0 000 12z"></path>
      </g>
    </svg>
  );
} 