import React from 'react'
import qr from "./../../../media/qr.png"
import s from "./QRBlock.module.sass"

export default function QRBlock() {
  return (
    <div className={s.qr_block}>
        <div className={s.qr_img}>
            <img src={qr} alt="qr" />
        </div>

        <div className={s.qr_info}>
            <p className={s.qr_title}>John Abraham , Ph.d</p>
            <div className={s.qr_info_item}>
                <p>Mail: </p>
                <p>johnabraham@gmail.com</p>
            </div>
            <div className={s.qr_info_item}>
                <p>Phone: </p>
                <p>(+2) 123 545 9000</p>
            </div>
        </div>

    </div>
  )
}
