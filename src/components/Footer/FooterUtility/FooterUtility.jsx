import React from 'react'
import s from "./FooterUtility.module.sass"

export default function FooterUtility() {
  return (
    <div className={s.footer_utility}>
        <h3 className={s.h3}>Utility Pages</h3>
        <ul className={s.link_list}>
            <li><a href='/'>Style Guide</a></li>
            <li><a href='/'>404 Not Found</a></li>
            <li><a href='/'>Password Protected</a></li>
            <li><a href='/'>Licenses</a></li>
            <li><a href='/'>Changelog</a></li>
        </ul>

    </div>
  )
}
