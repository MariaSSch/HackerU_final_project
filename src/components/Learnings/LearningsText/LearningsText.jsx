import React, { useEffect, useState } from 'react'
import LearnItem from '../LearnItem/LearnItem';
import s from "./LearningsText.module.sass"
import { allLearnings } from '../../../requests';
export default function LearningsText() {
  const [learnings, setLearnings] = useState([]);


useEffect(()=>{
    allLearnings(setLearnings);
}, [])

  return (
    <div className={s.learnings_text}>

      {learnings.map(l=>
                    <LearnItem key={l.id} number={l.number} text={l.text}/>
    
        )}
    </div>
  )
}
