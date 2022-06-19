import React from 'react'
import s from "./GetBookCopy.module.sass"
import GetBookCopyText from './GetBookCopyText/GetBookCopyText'
import GetBookCopyImg from './GetBookCopyImg/GetBookCopyImg'

export default function GetBookCopy() {
  return (
    <div className={s.get_book_copy}>
        <div className={s.wrap}>
            <GetBookCopyText />
            <GetBookCopyImg />
        </div>
    </div>
  )
}
