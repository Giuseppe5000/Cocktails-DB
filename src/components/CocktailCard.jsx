import React, { useState } from 'react';

const CocktailCard = (props) => {

    const [showInstructions, setShowInstructions] = useState(false);

    return (
        <div className="col mb-5">
            <div className="card " style={{ width: '18rem' }}>
                {!showInstructions && <img src={props.img} className="card-img-top" alt="..." />}
                <div className="card-body">
                    {showInstructions && <p className="card-text">{props.instructions ? props.instructions : "No instructions provided"}</p>}
                    <h5 className="card-title">{props.name}</h5>
                    <button type="button" className="btn btn-dark" onClick={() => setShowInstructions(!showInstructions)}>Instructions</button>
                </div>
            </div>
        </div>

    )
}

export default CocktailCard;