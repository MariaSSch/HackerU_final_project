import React from 'react'
import { useState } from 'react'
import Order from './../Order/Order'
import Button from '../UI/Button/Button'
import ModalWindow from '../UI/ModalWindow/ModalWindow'
import s from "./FirstLine.module.sass"
import Nav from './Nav/Nav'
import Title from './Title/Title'
//import { useDispatch, useSelector } from 'react-redux/es/exports'


export default function FirstLine() {
  const [modal, setModal] = useState(false);
  //const dispatch = useDispatch();
  //const modal = useSelector(state => state.modal)

  //const closeModal = () => dispatch({type: "MODAL_OFF"});
  const closeModal = () => setModal(false);
  return (
    <>
    <div className={s.first_line}>
        <Title/>
        <Nav/>
        <Button  onClick={()=> setModal(true)} children={"Order Today"}/>
        
    </div>
    {modal && <ModalWindow closeModal={closeModal}>
                           <Order closeModal={closeModal}/>
                  </ModalWindow>}
    </>
  )
}
