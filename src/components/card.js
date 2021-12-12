import React from 'react'

const CardComponent = (e, i) => {
    return (
        <div className="block-card" key={e, i}>
            <div className="card">
                <div className="card-body" >
                    <div className="card-title">{e.name}</div>
                    <div className="card-text"><p>{e.content}</p></div>
                </div>
            </div>
        </div>
    )
}
export default CardComponent