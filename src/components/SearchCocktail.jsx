import React, { useState } from 'react';

const SearchCocktail = (props) => {

    const[cocktail, setCocktail] = useState();

    const handleChange = (e) => {
        setCocktail(e.target.value);
    }

    const handleKeypress = (e) => {
        if(e.key === 'Enter'){
            props.onSearchCocktail(cocktail);
          }
    }

    return (
        <div className='container mt-5 mb-5'>
            <div className="input-group">
                <input type="text" className="form-control" onChange={handleChange} onKeyPress={handleKeypress}/>
                <button type="button" className="btn btn-dark" onClick={() => props.onSearchCocktail(cocktail)}>Search</button>
            </div>
        </div>
    )
}

export default SearchCocktail;
