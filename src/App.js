import { useEffect, useState } from "react";
import './App.css';
import video from "./cake-80338.mp4";
import MyRecipesComponent from "./MyRecipesComponent";


function App() {

  const MY_ID = "3906ac54";
  const MY_KEY = "bde8b9343b48fe745da124595cac5561";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState(`Greek Salad (Horiatiki)`);

  useEffect(() => {
      const getRecipe = async() => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits);
      console.log(data.hits);
      }
      getRecipe();
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
      // console.log(e.target.value);
      setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
      e.preventDefault();
      setWordSubmitted(mySearch);
  }


  return (

    <div className="container">

      <div className="App">

        <div className="container">
          <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
          <h1>Find a Recipe</h1>
        </div>

        <div className="container">
          <form onSubmit={finalSearch}>
            <input className="search" placeholder="Search..." onChange={myRecipeSearch} value={mySearch} />
          </form>
              
          <button onClick={finalSearch}>
            <img src="https://img.icons8.com/fluency/48/000000/fry.png" className="icon" height="35px" alt="magnifying glass" />
          </button>
        </div>

        {myRecipes.map(element => {
          return(
            <div key={element.recipe.uri}>
              <MyRecipesComponent label={element.recipe.label} image={element.recipe.image} calories={element.recipe.calories} ingredients={element.recipe.ingredientLines} cuisine={element.recipe.cuisineType} protein={element.recipe.totalNutrients.PROCNT} fatTotal={element.recipe.totalNutrients.FAT} fatSat={element.recipe.totalNutrients.FASAT} fatTrans={element.recipe.totalNutrients.FATRN} carbs={element.recipe.totalNutrients.CHOCDF} fiber={element.recipe.totalNutrients.FIBTG} sugars={element.recipe.totalNutrients.SUGAR} cholesterol={element.recipe.totalNutrients.CHOLE} vitD={element.recipe.totalNutrients.VITD} calcium={element.recipe.totalNutrients.CA} iron={element.recipe.totalNutrients.FE} potassium={element.recipe.totalNutrients.K} servings={element.recipe.yield} instructions={element.recipe.url} />
            </div>
          )
        })}

      </div>

    </div>

  );
}

export default App;
