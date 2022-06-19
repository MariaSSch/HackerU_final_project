import React from 'react'
import FBIcon from '../../UI/FBIcon/FBIcon'
import TwitterIcon from '../../UI/TwitterIcon'
import LinkedinIcon from '../../UI/LinkedinIcon'
import s from "./Social.module.sass"

export default function Social() {
  return (
    <div className={s.social}>
        <FBIcon className={"top"}/>
        <TwitterIcon className={"top"}/>
        <LinkedinIcon className={"top"}/>
    </div>
  )
}
