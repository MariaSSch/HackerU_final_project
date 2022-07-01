import React from 'react'
import s from "./BookItem.module.sass"

export default function BookItem({cover, title, price, abstract, type}) {
  return (
    <div className={s.book}>
        <div className={s.book_cover}>
            <img src={process.env.PUBLIC_URL + cover} alt="book"/>
            
        </div>
        <div className={s.book_descr}>
            <p className={s.book_title}>{title}</p>
            <p className={s.book_price}>{`$ ${price} USD`}</p>
            <p className={s.book_abstract}>{abstract}</p>
            <p className={s.book_type}>{type}</p>
        </div>
    </div>
  )
}
