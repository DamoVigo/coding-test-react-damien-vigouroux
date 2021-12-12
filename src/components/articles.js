import React, { useState, useEffect } from 'react'
import { userIdService } from 'services/userId.service';
import CardComponent from './card';

const ArticlesComponent = (e) => {

    var id = e.articles
    const [article, setArticle] = useState([]);


    const fetchInfo = (id) => {
         userIdService.listWithId(id).then((a) => {
            const todosArticles = a.articles
            setArticle(todosArticles)
        })
    }

    useEffect(() => {
        fetchInfo(id)

        // return () => {
        //     cleanup
        // }
    }, [id])

    return (
        <>
        <div className="articles-list">
            {article.map((e, i) => {
                
                return CardComponent(e, i)
            })
            }
        </div>
        </>

    )
}

export default ArticlesComponent
