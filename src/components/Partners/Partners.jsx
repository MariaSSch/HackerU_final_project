import React, { useEffect, useState } from 'react'
import s from "./Partners.module.sass"

export default function Partners() {
    const [partners, setPartners] = useState([]);

const allPartners = (resolve, reject = ()=>{}) =>{
    fetch("http://localhost:7000/api/partner/all") 
        .then(data=>data.json(), reject)
        .then(resolve);
}

useEffect(()=>{
    allPartners(setPartners);
}, [])


  return (
    <div className={s.partners}>
        <div className={s.wrap}>
            <h2 className={s.h2}>Trusted By The Best</h2>
            
            <div className={s.partners_list}>

                {partners.map(p=>
                    <div className={s.partner_item} key={p.id}>
                        <img className={s.partner_logo} src={process.env.PUBLIC_URL + p.logo} alt="amazen" />
                    <p className={s.partner_title}>{p.title}</p>
                    <p className={s.partner_abstract}>{p.abstract}</p>
                </div>
                    )}


            </div>
        </div>

    </div>
  )
}
