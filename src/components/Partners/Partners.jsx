import React, { useEffect, useState } from 'react'
import PartnerItem from './PartnerItem/PartnerItem';
import s from "./Partners.module.sass"
import {allPartners} from "./../../requests"
export default function Partners() {
    const [partners, setPartners] = useState([]);


useEffect(()=>{
    allPartners(setPartners);
}, [])


  return (
    <div className={s.partners} id="partners">
        <div className={s.wrap}>
            <h2 className={s.h2}>Trusted By The Best</h2>
            
            <div className={s.partners_list}>

                {partners.map(p=>
                        <PartnerItem key={p.id} logo={p.logo} title={p.title} abstract={p.abstract} />
                    )}


            </div>
        </div>

    </div>
  )
}
