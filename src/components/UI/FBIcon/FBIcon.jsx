import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import s from "./FBIcon.module.sass"


export default function FBIcon({className}) {
    const element = <FontAwesomeIcon icon={faFacebookF}/>
    const classes = s.brands + " " + s.fb_top;
    const classes_footer = s.brand_footer + " " + s.fb_footer;
  return (
    <div className={(className === "top" ? classes : classes_footer)}>
        <a href='www.facebook.com' target={"_blank"}>{element}</a>
    </div>
  )
}
