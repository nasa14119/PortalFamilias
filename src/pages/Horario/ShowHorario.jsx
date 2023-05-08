import moment from "moment";
const format = {
  "8":1,
  "9":13,
  "10":25,
  "11":37,
  "12":49,
  "1":61,
  "2":73,
  "3":85,
  "4":98,
}
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
export const ShowHorario = ({dia}) =>{
    let arry = Array(0); 
    for (let i = 0;dia.length > i ; i++)  {
      let element = dia[i]
      let subend = element.inicio.split(":");
      let inicio = format[subend[0]] + subend[1] / 5 
      let extra = element.larg? 18 : 9 
      let fin = inicio + extra
      let colorForEle = ""
      if (Color.some(e => e.materia === element.clase)){
        colorForEle = Color[Color.findIndex(e => e.materia === element.clase)].color
      }else{
        let colorIndex = Color.findIndex(e => e.materia === "")
        Color[colorIndex] = {...Color[colorIndex] , materia: element.clase}
      }
      arry.push(
        <li key={`${element.clase}-${i}`}style={{gridRow:`${inicio} / ${fin}`, backgroundColor:colorForEle}}>
          <span>{element.clase}</span>
          <span className='inicio-horario'>{element.inicio} - {moment(element.inicio, "hh:mm").add(element.larg ? 90 : 45, "m").format('h:mm')}</span>
        </li>
      )
    }
    return arry
}