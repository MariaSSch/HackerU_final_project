import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import s from "./InstagramIcon.module.sass"

export default function FBIcon({className}) {
    const element = <FontAwesomeIcon icon={faInstagram}/>
    const classes = s.brands + " " + s.insta_top;
    const classes_footer = s.brand_footer + " " + s.insta_footer;

  return (
    <div className={(className === "top" ? classes : classes_footer)}>
        <a href='wwww.instagram.com' target={"_blank"}>{element}</a>
    </div>
  )
}
