import React from 'react'
import s from "./ArticleItem.module.sass"

export default function ArticleItem({image, title, abstract, date}) {
  return (
    <div className={s.article_item}>
        <div className={s.article_img}>
            <img src={process.env.PUBLIC_URL + image} alt="img" />
        </div>
        <div className={s.article_text}>
            <p className={s.article_title}>{title}</p>
            <p className={s.article_abstract}>{abstract}</p>
            <p className={s.article_date}>{date}</p>
        </div>
    </div>
  )
}
