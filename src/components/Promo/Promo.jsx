import React from 'react'
import PromoText from "./PromoText/PromoText"
import PromoImg from "./PromoImg/PromoImg"
import s from "./Promo.module.sass"

export default function Promo() {
  return (
    <div className={s.promo}>
        <div className={s.wrap}>
          <PromoText/>
          <PromoImg/>
        </div>
    </div>
  )
}
