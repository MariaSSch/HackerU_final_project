import React from 'react'
import Button from '../UI/Button/Button'
import s from "./FirstLine.module.sass"
import Nav from './Nav/Nav'
import Title from './Title/Title'

export default function FirstLine() {
  return (
    <div className={s.first_line}>
        <Title/>
        <Nav/>
        <Button children={"Order Today"}/>
    </div>
  )
}
