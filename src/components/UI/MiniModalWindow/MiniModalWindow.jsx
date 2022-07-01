import React from 'react'
import s from "./MiniModalWindow.module.sass"

export default function ModalWindow({children, closeMiniModal}) {
  return (
    <div className={s.mini_modal_container} onClick={closeMiniModal} onSubmit={closeMiniModal}>
        <div className={s.modal}>
            {children}
        </div>
    </div>
  )
}
