import React from 'react'
import "./styles.css"
import Question from '../Question';
import data from "../data.json"
function MainEvaluacion({controls = false}) {
  return (
        <ul>
          {
            data.map(({body, id})=>{
              return <Question body={body} key={id}/>
            })
          }
        </ul>
  );
}

export default MainEvaluacion