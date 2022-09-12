import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchCocktail from './components/SearchCocktail';
import CocktailCard from './components/CocktailCard';

const App = () => {

  const [cocktails, setCocktails] = useState();

  const handleSearchCocktail = async (cocktail) => {
    let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`);
    let data = await response.json();
    setCocktails(data.drinks);
  }

  return (
    <>
      <Navbar />
      <h1 className="text-center fw-bold font-monospace text-white bg-dark" >Your endless cocktail list</h1>
      <SearchCocktail onSearchCocktail={handleSearchCocktail} />
      <div className="container text-center">
        <div className="row row-cols-auto">
          {cocktails && cocktails.map((cocktail) => <CocktailCard key={cocktail.idDrink} name={cocktail.strDrink} img={cocktail.strDrinkThumb} instructions={cocktail.strInstructions} />)}
        </div>
      </div>

    </>
  )
}

export default App;