import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import s from "./TwitterIcon.module.sass"

export default function FBIcon({className}) {
    const element = <FontAwesomeIcon icon={faTwitter}/>
    const classes = s.brands + " " + s.t_top;
    const classes_footer = s.brand_footer + " " + s.t_footer;

  return (
    <div className={(className === "top" ? classes : classes_footer)}>
       <a href='www.twitter.com' target={"_blank"}>{element}</a>
    </div>
  )
}
