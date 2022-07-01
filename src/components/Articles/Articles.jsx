import React, { useEffect, useState } from 'react'
import ArticleItem from './ArticleItem/ArticleItem';
import s from "./Articles.module.sass"
import { allArticles } from '../../requests';

export default function Articles() {
    const [articles, setArticles] = useState([]);

 
    useEffect(()=>{
        allArticles(setArticles);
    }, [])

  return (
    <div className={s.articles}>
        <div className={s.wrap}>
            <h2 className={s.h2}>Articles & Resources</h2>
            <div className={s.article_list}>
                {articles.map(a=>
                    <ArticleItem key={a.id} image={a.image} title={a.title} 
                                abstract={a.abstract} date={a.date} />
                    )}
            </div>
        </div>
    </div>
  )
}
