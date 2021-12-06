import React, { useState, useEffect } from 'react'
import { userIdService } from 'services/userId.service';

const ArticlesComponent = (e) => {

    var id = e.articles
    const [article, setArticle] = useState([]);


    const fetchInfo = (id) => {
        const response = userIdService.listWithId(id).then((a) => {
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
            {article.map((e) => {
                console.log(e)
                return <div className="block-card">
                        <div className="card">
                            <div className="card-body" key={e.id}>
                                <div className="card-title">{e.name}</div>
                                <div className="card-text"><p>{e.content}</p></div>
                            </div>
                        </div>
                    </div>
                
            })
            }
        </div>
        </>

    )
}

export default ArticlesComponent
