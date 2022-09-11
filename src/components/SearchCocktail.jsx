import React, { useState } from 'react'

const SearchCocktail = (props) => {

    const[cocktail, setCocktail] = useState()

    const handleChange = (e) => {
        setCocktail(e.target.value)
    }

    return (
        <div className='container' style={{ marginTop: '2%' }}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" onChange={handleChange}/>
                <button type="button" className="btn btn-dark" onClick={() => props.onSearchCocktail(cocktail)}>Search</button>
            </div>
        </div>
    )
}

export default SearchCocktail
