import "./App.css";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import { useEffect, useState } from "react";
const apiurl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setisLoading] = useState(false);
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);

  //function tosearch for recipes
  const searchRecipes = async () => {
    setisLoading(true);
    const url = apiurl + query;
    const res = await fetch(url);
    const data = await res.json();
    console.log("data===>", data);

    setrecipes(data.meals);
    setisLoading(false);
  };
  useEffect(() => {
    searchRecipes();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); //not to let page refresh
    searchRecipes();
  };
  return (
    <div className="container">
      <h1>Our Recipe App</h1>
      <div>
        <SearchBar
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          onChange={(event) => setquery(event.target.value)}
        />
      </div>
      <div className="recipes">
        {recipes
          ? recipes.map((recipe) => <RecipeCard recipe={recipe} />)
          : "not found"}
      </div>
    </div>
  );
}

export default App;
