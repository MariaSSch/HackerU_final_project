import React from 'react'
import s from "./Nav.module.sass"

export default function Nav() {
  return (
    <nav className={s.nav}>
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Pages</a>
        <a href='/'>Contact Us</a>
    </nav>
  )
}
