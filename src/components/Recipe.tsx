import { useEffect, useState } from "react";
import { RecipeService } from "../api/RecipeService";
import { AxiosResponse } from "axios";
import { Card } from "./Card";
import { Meal } from "../models/Meal";

interface IState {
  recipes: Meal[];
}

export const Recipe: React.FC = () => {
  const [data, setData] = useState<IState>({
    recipes: [] as Meal[],
  });

  useEffect(() => {
    RecipeService.getAllRecipes().then((res: AxiosResponse) => {
      console.log(res.data);
      setData({ recipes: res.data.meals });
    });
  }, []);
  return (
    <div>
      {data.recipes.map((recipe) => (
        <Card key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
};
