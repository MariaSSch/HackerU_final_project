import React from 'react'
import s from "./LearningsImg.module.sass"
import woman from './../../../media/woman.png'

export default function LearningsImg() {
  return (
    <div className={s.learnings_img}>
        <img src={woman} alt="woman" />
    </div>
  )
}
