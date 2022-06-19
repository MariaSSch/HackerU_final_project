import React from 'react'
import s from "./GetBookCopyImg.module.sass"
import cupAndBook from './../../../media/cupAndBook.png'


export default function GetBookCopyImg() {
  return (
    <div className={s.get_book_copy_img}>
      <img src={cupAndBook} alt="cupAndBook"/>
    </div>
  )
}
