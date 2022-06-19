import React from 'react'
import author from "./../../../media/author.png"
import s from "./AuthorImg.module.sass"


export default function AuthorImg() {
  return (
    <div className={s.author_img}>
                <img src={author} alt="author" />
    </div>
  )
}
