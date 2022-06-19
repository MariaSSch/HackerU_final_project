import React from 'react'
import s from "./Button.module.sass"

export default function Button({children}) {
  return (
    <a className={s.btn} href='/'>{children}</a>
  )
}
