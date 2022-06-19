import React from 'react'
import s from "./PromoImg.module.sass"
import theDarkLight_xl from "./../../../media/theDarkLight_xl.png"

export default function PromoImg() {
  return (
    <div className={s.promo_img}>
        <img src={theDarkLight_xl} alt="book_cover"/>
    </div>
  )
}
