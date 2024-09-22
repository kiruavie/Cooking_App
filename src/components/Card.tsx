import { Meal } from "../models/Meal";

interface IProps {
  recipe: Meal;
}

export const Card: React.FC<IProps> = ({ recipe }) => {
  return (
    <div className="card">
      <h3> {recipe.strMeal} </h3>
      <h4> {recipe.strArea} </h4>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p> {recipe.strInstructions} </p>
    </div>
  );
};
