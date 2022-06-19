import React, { useEffect, useState } from 'react'
import s from "./LearningsText.module.sass"

export default function LearningsText() {
  const [learnings, setLearnings] = useState([]);

const allLearnings = (resolve, reject = ()=>{}) =>{
    fetch("http://localhost:7000/api/learning/all") 
        .then(data=>data.json(), reject)
        .then(resolve);
}

useEffect(()=>{
    allLearnings(setLearnings);
}, [])

  return (
    <div className={s.learnings_text}>

      {learnings.map(l=>
                    <div className={s.learn_item} key={l.id}>
                    <div className={s.number}>{l.number}</div>
                    <div className={s.text}>{l.text}</div>
                </div>
    
        )}
    </div>
  )
}
