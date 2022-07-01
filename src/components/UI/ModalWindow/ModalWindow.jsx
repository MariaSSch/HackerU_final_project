import React from 'react'
import s from "./ModalWindow.module.sass"

export default function ModalWindow({children, closeModal}) {
  return (
    <div className={s.modal_container} onClick={closeModal} onSubmit={closeModal}>
        <div onClick={e => e.stopPropagation()} onSubmit={e => e.stopPropagation()} className={s.modal}>
            {children}
        </div>
    </div>
  )
}
