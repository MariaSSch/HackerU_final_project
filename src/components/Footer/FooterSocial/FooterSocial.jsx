import React from 'react'
import s from "./FooterSocial.module.sass"
import logoBook from "./../../../media/logoBook.png"
import logoPages from "./../../../media/logoPages.png"
import FBIcon from '../../UI/FBIcon/FBIcon'
import TwitterIcon from '../../UI/TwitterIcon'
import LinkedinIcon from '../../UI/LinkedinIcon'
import InstagramIcon from '../../UI/InstagramIcon'

export default function FooterSocial() {

  return (
    <div className={s.footer_social}>
      <div className={s.logo}>
        <img src={logoBook} alt="logo" />
        <img src={logoPages} alt="logo" />
      </div>

      <div className={s.social}>
        <FBIcon />
        <TwitterIcon />
        <LinkedinIcon />
        <InstagramIcon />
      </div>

    </div>
  )
}
