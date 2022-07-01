import React from 'react'
import s from "./Learnings.module.sass"
import LearningsImg from './LearningsImg/LearningsImg'
import LearningsText from './LearningsText/LearningsText'

export default function Learnings() {
  return (
    <div className={s.learnings}>
        <div className={s.wrap}>
          <h2 className={s.h2}>What Will You Learn?</h2>
          <div className={s.content}>
              <LearningsText />
              <LearningsImg />
          </div>
        </div>
    </div>
  )
}
