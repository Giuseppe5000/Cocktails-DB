import React, { useState } from 'react';

const CocktailCard = (props) => {

    const [showInstructions, setShowInstructions] = useState(false);
    const [showIgredients, setShowIngredients] = useState(false);

    const getIngredients = () => {
        let ingredients = [];
        let i = 1;
        do {
            let ingredient = props.cocktail[`strIngredient${i}`];
            let measure = props.cocktail[`strMeasure${i}`];
            ingredients.push(`${ingredient} ${measure ? measure : ''}`);
            i++;
        } while (props.cocktail['strIngredient' + i]);

        return ingredients;
    };

    return (
        <div className="col mb-5">
            <div className="card " style={{ width: '18rem' }}>
                {(!showInstructions && !showIgredients) && <img src={props.img} className="card-img-top" alt="..." />}
                <div className="card-body">
                    {showInstructions && <p className="card-text">{props.instructions ? props.instructions : "No instructions provided"}</p>}
                    <h5 className="card-title">{props.name}</h5>
                    <button type="button" className="btn btn-dark me-1" onClick={() => setShowInstructions(!showInstructions)}>Instructions</button>
                    <button type="button" className="btn btn-dark ms-1" onClick={() => setShowIngredients(!showIgredients)}>Ingredients</button>
                </div>
                <ul className="list-group list-group-flush">
                    {showIgredients && getIngredients().map((el) => <li className="list-group-item">{el}</li>)}
                </ul>
            </div>
        </div>

    )
}

export default CocktailCard;