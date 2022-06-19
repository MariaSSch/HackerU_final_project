import React, { useEffect, useState } from 'react'
import s from "./Books.module.sass"

export default function Books() {

const [books, setBooks] = useState([]);

const allBooks = (resolve, reject = ()=>{}) =>{
    fetch("http://localhost:7000/api/book/all") 
        .then(data=>data.json(), reject)
        .then(resolve);
}

useEffect(()=>{
    allBooks(setBooks);
}, [])

  return (
    <div className={s.books}>
        <div className={s.wrap}>
            <h2 className={s.h2}>The Author’s Book</h2>
            <div className={s.library}>
                {books.map(b=> 
                        <div className={s.book} key={b.id}>
                            <div className={s.book_cover}>
                                <img src={process.env.PUBLIC_URL + b.cover} alt="book"/>
                                
                            </div>
                            <div className={s.book_descr}>
                                <p className={s.book_title}>{b.title}</p>
                                <p className={s.book_price}>{`$ ${b.price} USD`}</p>
                                <p className={s.book_abstract}>{b.abstract}</p>
                                <p className={s.book_type}>{b.type}</p>
                            </div>
                        </div> )}
            </div>
        </div>
    </div>
  )
}
