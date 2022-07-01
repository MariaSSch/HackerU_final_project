import React, {useState, useEffect} from 'react'
import Button from './../UI/Button/Button'
import MiniModalWindow from '../UI/MiniModalWindow';
import s from "./Order.module.sass"
import { allBooks } from "./../../requests"

export default function Order({closeModal}) {

    const [miniModal, setMiniModal] = useState(false);
    const closeMiniModal = () => setMiniModal(false);

    const [books, setBooks] = useState([]);
    
    useEffect(()=>{
        allBooks(setBooks);
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        const {email} = e.target;

        books.map(b=>{
            const orderInput = document.querySelectorAll(`#order input[name="${b.title}"]`);
            return orderInput.forEach(o=> console.log(JSON.stringify(b.title + " : " + o.checked + " ; " + email.value)));
        })
        setMiniModal(true);
    }


  return (
    <>
    <form className={s.order_form} id="order" onSubmit={onSubmit}>
        <h3 className={s.h3}>Choose a book you like</h3>
        
        {books.map(b=>
            <label key={b.title}>
                <input type="checkbox" name={b.title} form="order"/><img src={process.env.PUBLIC_URL + b.cover} alt="book" width="60vw"/> {b.title}
            </label>
            )}

        <label className={s.email}>
            <input type="email" required name="email" form="order"/>Input your email and we'll contact you soon!
        </label>
        <Button children={"Send"} />
    </form>

    {miniModal && <MiniModalWindow closeMiniModal={()=>{closeMiniModal(); closeModal()}}>Thank you for your order</MiniModalWindow>}
    </>
  )
}
