import React from 'react'
import Social from '../Social/Social'
import logoBook from "./../../../media/logoBook.png"
import logoPages from "./../../../media/logoPages.png"
import s from "./Title.module.sass"

export default function Title() {
  return (
    <div className={s.title}>
        <img src={logoBook} alt="book" />
        <img src={logoPages} alt="book" className={s.page}/>
        <Social/>
    </div>
  )
}
