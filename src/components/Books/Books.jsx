import React, { useEffect, useState } from 'react'
import BookItem from './BookItem/BookItem';
import s from "./Books.module.sass"
import { allBooks } from "./../../requests"
export default function Books() {

const [books, setBooks] = useState([]);

useEffect(()=>{
    allBooks(setBooks);
}, [])

  return (
    <div className={s.books} id="authorsBook">
        <div className={s.wrap}>
            <h2 className={s.h2}>The Author’s Book</h2>
            <div className={s.library}>
                {books.map(b=> 
                    <BookItem key={b.id} cover={b.cover} title={b.title} 
                                price={b.price} abstract={b.abstract} type={b.type}/>
                    )}
            </div>
        </div>
    </div>
  )
}
