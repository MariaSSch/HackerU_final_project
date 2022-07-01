import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import s from "./MenuBar.module.sass"

export default function MenuBar({...props}) {
   const element = <FontAwesomeIcon icon={faBars}/>

  return (
    <div className={s.menu_bar} {...props}>
        {element}
    </div>

  )
}
