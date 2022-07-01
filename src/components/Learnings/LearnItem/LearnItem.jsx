import React from 'react'
import s from "./LearnItem.module.sass"

export default function LearnItem({number, text}) {
  return (
    <div className={s.learn_item}>
        <div className={s.number}>{number}</div>
        <div className={s.text}>{text}</div>
    </div>
  )
}
