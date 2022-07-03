import React from 'react'
import QRBlock from "./../QRBlock/QRBlock"
import s from "./AuthorText.module.sass"


export default function AuthorImg() {

  const statistics = [
    {
        id: 1,
        figure: "02",
        value: "Books Published"
    },
    {
        id: 2,
        figure: "4.5",
        value: "User Reviews"
    },
    {
        id: 3,
        figure: "04",
        value: "Best Seller Awards"
    },

  ]
  return (
    <div className={s.author_info}>
                <h2 className={s.h2}>About the Author</h2>
                <p className={s.author_abstract}>We believe that bookstores are essential 
                to a healthy culture. They’re where authors can connect with readers, where 
                we discover new writers, where children get hooked on the thrill of reading 
                that can last a lifetime.</p>
                <div className={s.statistics}>

                    {statistics.map(item=>
                        <div id={item.id} className={s.stat_item}>
                            <p id={item.figure} className={s.figure}>{item.figure}</p>
                            <p id={item.value} className={s.value}>{item.value}</p>

                        </div>
                        )}
                </div>
                <QRBlock/>
            </div>
  )
}
