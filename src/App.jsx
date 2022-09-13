import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchCocktail from './components/SearchCocktail';
import CocktailCard from './components/CocktailCard';

const App = () => {

  const [cocktails, setCocktails] = useState();

  const handleSearchCocktail = async (cocktail) => {
    let response = await fetch(`http://localhost:3001/api/name/${cocktail}`); // Using my local API
    let data = await response.json();
    setCocktails(data.data);
  }

  return (
    <>
      <Navbar />
      <h1 className="text-center fw-bold font-monospace text-white bg-dark" >Your endless cocktail list</h1>
      <SearchCocktail onSearchCocktail={handleSearchCocktail} />
      <div className="container text-center">
        <div className="row row-cols-auto justify-content-center">
          {cocktails && cocktails.map((cocktail) => <CocktailCard key={cocktail.IDCocktail} ingredients={cocktail.Ingredients} name={cocktail.Name} img={cocktail.Thumb} instructions={cocktail.Instructions} />)}
        </div>
      </div>

    </>
  )
}

export default App;