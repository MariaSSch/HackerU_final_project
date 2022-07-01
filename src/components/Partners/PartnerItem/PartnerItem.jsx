import React from 'react'
import s from "./PartnerItem.module.sass"

export default function PartnerItem({logo, title, abstract}) {
  return (
    <div className={s.partner_item}>
        <img className={s.partner_logo} src={process.env.PUBLIC_URL + logo} alt="amazen" />
        <p className={s.partner_title}>{title}</p>
        <p className={s.partner_abstract}>{abstract}</p>
</div>
)
}
