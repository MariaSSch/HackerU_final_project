import React from 'react'
import s from "./Author.module.sass"
import AuthorImg from './AuthorImg/AuthorImg'
import AuthorText from './AuthorText/AuthorText'



export default function Author() {
  return (
    <div className={s.author} id="author">
        <div className={s.wrap}>
            <AuthorImg/>
            <AuthorText />
        </div>
    </div>
  )
}
