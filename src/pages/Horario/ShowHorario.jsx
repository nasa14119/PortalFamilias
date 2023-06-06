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
export const ShowHorario = ({dia}) =>{
    let arry = Array(0); 
    for (let i = 0; dia.length > i ; i++)  {
      let element = dia[i]
      let subend = element.inicio.split(":");
      let inicio = format[subend[0]] + subend[1] / 5 
      let extra = element.larg ? 18 : 9 
      let fin = inicio + extra
      arry.push(
        <li key={`${element.clase}-${i}`}style={{gridRow:`${inicio} / ${fin}`, backgroundColor: element.color}}>
          <span>{element.clase}</span>
          <span className='inicio-horario'>{element.inicio} - {moment(element.inicio, "hh:mm").add(element.larg ? 90 : 45, "m").format('h:mm')}</span>
        </li>
      )
    }
    return arry
}