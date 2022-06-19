import React from 'react'
import s from "./FooterExplore.module.sass"

export default function FooterExplore() {

  return (
    <div className={s.footer_explore}>
      <h3 className={s.h3}>Explore</h3>
      <ul className={s.link_list}>
        <li><a href='/'>Home</a></li>
        <li><a href='/'>About</a></li>
        <li><a href='/'>Articles</a></li>
        <li><a href='/'>Our Store</a></li>
        <li><a href='/'>Contact Us</a></li>
      </ul>
    </div>
  )
}
