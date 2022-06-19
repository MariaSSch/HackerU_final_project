import React from 'react'
import s from "./Learnings.module.sass"
import LearningsImg from './LearningsImg/LearningsImg'
import LearningsText from './LearningsText/LearningsText'

export default function Learnings() {
  return (
    <div className={s.learnings}>
        
        <h2 className={s.h2}>What Will You Learn?</h2>
        
        <div className={s.wrap}>
            <LearningsText />
            <LearningsImg />
        </div>
    </div>
  )
}
