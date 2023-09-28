import "../App.css";

export default function Recipe({ recipe }) {
  const { idMeal, strMeal, strCategory, strMealThumb } = recipe;
  return (
    <div className="card">
      <img src={recipe.strMealThumb} className="card-image" />
      <div className="card-body">
        <p className="card-category">{recipe.strCategory}</p>
        <h1>{recipe.strMeal}</h1>
        <button className="btn">Order Now </button>
      </div>
    </div>
  );
}
