import React from 'react'
import Button from '../../UI/Button/Button'
import ModalWindow from '../../UI/ModalWindow/ModalWindow'
import Order from './../../Order/Order'
import { useDispatch, useSelector } from 'react-redux/es/exports'

import s from "./PromoText.module.sass"

export default function PromoText() {

    const dispatch = useDispatch();
    const modal = useSelector(state => state.modal);

    const closeModal = () => dispatch({type: "MODAL_OFF"});
    
  return (
    <>
        <div className={s.promo_text}>
            <p className={s.welcome}>Welcome to Pages!!!</p>
            <h1>Your Books From</h1>
            <h1>The Best Writer.</h1>
            <p className={s.believes}>We believe that reading books are essential to a healthy culture.<br/>They’re where authors can connect with readers.</p>
            <div className={s.demo}>
                <Button onClick={()=> dispatch({type: "MODAL_ON"})} children={"Order Today"}/>
                <a className={s.demo_link} href='/'>Read Free Demo</a>
            </div>
            <div className={s.statistics}>
                <div className={s.stat_item}>
                    <p className={s.parameter}>Pages:</p>
                    <p className={s.figures}>250pages</p>
                </div>
                <div className={s.stat_item}>
                    <p className={s.parameter}>Length:</p>
                    <p className={s.figures}>10 Hours</p>
                </div>
                <div className={s.stat_item}>
                    <p className={s.parameter}>Rating:</p>
                    <p className={s.figures}>4.5/5 (305 ratings)</p>
                </div>
            </div>
        </div>
        {modal && <ModalWindow closeModal={closeModal}>
                           <Order closeModal={closeModal}/>
                  </ModalWindow>}

    </>
  )
}
