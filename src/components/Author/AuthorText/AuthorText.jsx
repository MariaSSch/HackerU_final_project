import React from 'react'
import QRBlock from "./../QRBlock/QRBlock"
import s from "./AuthorText.module.sass"


export default function AuthorImg() {
  const classes = s.stat_item + " " + s.stat_item_elem

  return (
    <div className={s.author_info}>
                <h2 className={s.h2}>About the Author</h2>
                <p className={s.author_abstract}>We believe that bookstores are essential 
                to a healthy culture. They’re where authors can connect with readers, where 
                we discover new writers, where children get hooked on the thrill of reading 
                that can last a lifetime.</p>
                <div className={s.statistics}>
                    <div className={s.stat_item}>
                        <p className={s.figure}>02</p>
                        <p className={s.value}>Books Published</p>
                    </div>

                    <div className={classes}>
                        <p className={s.figure}>4.5</p>
                        <p className={s.value}>User Reviews</p>
                    </div>

                    <div className={classes}>
                        <p className={s.figure}>04</p>
                        <p className={s.value}>Best Seller Awards</p>
                    </div>
                </div>
                <QRBlock/>
            </div>
  )
}
