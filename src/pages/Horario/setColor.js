const data = [
  [
  {clase:"Ingles", inicio:"8:00", larg:true},
  {clase:"TD", inicio:"9:40", larg:true},
  {clase:"Espacio Independiente", inicio:"11:20", larg:false},
  {clase:"Literatura", inicio:"12:05",larg:false},
  {clase:"Recreo", inicio:"12:50", larg:false},
  {clase:"Tutoria", inicio:"1:35", larg:false},
  {clase:"HDM", inicio:"2:30", larg:true},
],
[
  {clase:"Matematicas", inicio:"8:00", larg:true},
  {clase:"TLR", inicio:"9:40", larg:true},
  {clase:"Educacion Fisica", inicio:"11:20", larg:false},
  {clase:"Recreo", inicio:"12:05",larg:false},
  {clase:"Física", inicio:"12:50", larg:true},
  {clase:"Taller", inicio:"2:30", larg:true},
],
[
  {clase:"Educacion Fisica", inicio:"8:00", larg:false},
  {clase:"Matematicas", inicio:"8:45", larg:false},
  {clase:"Espacio Independiente", inicio:"9:40", larg:false},
  {clase:"Recreo", inicio:"10:25", larg:false},
  {clase:"Biologia", inicio:"11:20", larg:true},
  {clase:"FIH", inicio:"12:50", larg:false},
  {clase:"HDM", inicio:"1:35", larg:false},
  {clase:"Física", inicio:"2:30", larg:true},
],
  [
  {clase:"Ingles", inicio:"8:00", larg:true},
  {clase:"FIH", inicio:"9:40", larg:true},
  {clase:"Tutoria", inicio:"11:20", larg:false},
  {clase:"Recreo", inicio:"12:05", larg:false},
  {clase:"Biologia", inicio:"12:50", larg:true},
  {clase:"Taller", inicio:"2:30", larg:true}
],
[
  {clase:"Matematicas", inicio:"8:00", larg:true},
  {clase:"Literatura", inicio:"9:40", larg:true},
  {clase:"Recreo", inicio:"11:20", larg:false},
  {clase:"Física", inicio:"12:05", larg:false},
  {clase:"TD", inicio:"12:50", larg:true}
],
]
const Color = [
    {color:"#7cb518", materia:""},
    {color:"#2A9D8F", materia:""}, 
    {color:"#E9C46A", materia:""},
    {color:"#F4A261", materia:""},
    {color:"#ff4800", materia:""},
    {color:"#277da1", materia:""}, 
    {color:"#f58549", materia:""},
    {color:"#FCBF49", materia:""},
    {color:"#fbb02d", materia:""},
    {color:"#8ECAE6", materia:""},
    {color:"#219EBC", materia:""},
    {color:"#babd8d", materia:""},
    {color:"#FB8500", materia:""}, 
    {color:"#606c38", materia:""},
  ]
function setColor(data){
    return data.map( elements => {
        return elements.map(element =>{
          if(!Color.some(e => e.materia === element.clase)){
            const freeIndex = Color.findIndex(e => e.materia === "")
            Color[freeIndex] = {...Color[freeIndex], materia : element.clase}
          }
          const color = Color.filter(e => e.materia === element.clase)[0].color
          return {...element, color}
        })
    })
}
export const Info = setColor(data); 