import React from 'react'

const CocktailCard = (props) => {
    return (
        <div className="col">
            <div className="card " style={{width: '18rem'}}>
                <img src={props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.instructions}</p>
                    </div>
            </div>
        </div>

    )
}

export default CocktailCard