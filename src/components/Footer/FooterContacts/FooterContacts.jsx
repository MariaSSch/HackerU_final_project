import React from 'react'
import s from "./FooterContacts.module.sass"

export default function FooterContacts() {
  return (
    <div className={s.footer_contacts}>
        <h3 className={s.h3}>Keep in Touch</h3>
        <div className={s.contacts}>
            <div className={s.contact_position}>Address :</div>
            <div className={s.contact_position_value}>24A Kingston St, Los Vegas<br/>NC 28202, USA.</div>
            <div className={s.contact_position}>Mail :</div>
            <div className={s.contact_position_value}>support@pages.com</div>
            <div className={s.contact_position}>Phone :</div>
            <div className={s.contact_position_value}>(+22) 123 - 4567 - 900</div>
        </div>


    </div>
  )
}
