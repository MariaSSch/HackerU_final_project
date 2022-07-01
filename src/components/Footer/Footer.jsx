import React from 'react'
import s from "./Footer.module.sass"
import FooterExplore from './FooterExplore/FooterExplore'
import FooterSocial from './FooterSocial'
import FooterUtility from './FooterUtility/FooterUtility'
import FooterContacts from './FooterContacts/FooterContacts'

export default function Footer() {
  return (
    <div className={s.footer} id="contacts">
        <FooterSocial />
        <FooterExplore />
        <FooterUtility />
        <FooterContacts />
    </div>
  )
}
