import React, { useEffect, useState } from 'react'
import s from "./Articles.module.sass"

export default function Articles() {
    const [articles, setArticles] = useState([]);

    const allArticles = (resolve, reject = ()=>{}) =>{
        fetch("http://localhost:7000/api/article/all") 
            .then(data=>data.json(), reject)
            .then(resolve);
    }

    useEffect(()=>{
        allArticles(setArticles);
    }, [])

  return (
    <div className={s.articles}>
        <h2 className={s.h2}>Articles & Resources</h2>
        <div className={s.wrap}>

            {articles.map(a=>
                            <div className={s.article_item} key={a.id}>
                                <div className={s.article_img}>
                                    <img src={process.env.PUBLIC_URL + a.image} alt="img" />
                                </div>
                                <div className={s.article_text}>
                                    <p className={s.article_title}>{a.title}</p>
                                    <p className={s.article_abstract}>{a.abstract}</p>
                                    <p className={s.article_date}>{a.date}</p>
                            </div>
                        </div>
            
                )}


        </div>
    </div>
  )
}
