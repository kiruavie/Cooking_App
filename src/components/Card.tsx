import { Meal } from "../models/Meal";

interface IProps {
  recipe: Meal;
}

export const Card: React.FC<IProps> = ({ recipe }) => {
  return (
    <div className="card">
      <h2> {recipe.strMeal} </h2>
      <h4> {recipe.strArea} </h4>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p className="description"> {recipe.strInstructions} </p>
    </div>
  );
};
