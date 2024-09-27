import { useEffect, useState } from "react";
import { RecipeService } from "../api/RecipeService";
import { AxiosResponse } from "axios";
import { Meal } from "../models/Meal";
import { Card } from "../components/Card";

interface IState {
  recipes: Meal[];
}
export const Accueil = () => {
  const [data, setData] = useState<IState>({
    recipes: [] as Meal[],
  });

  const [input, setInput] = useState<string>("");

  useEffect(() => {
    // Si aucun input, on récupère toutes les recettes par défaut
    if (!input) {
      RecipeService.getAllRecipes().then((res: AxiosResponse) => {
        setData({ recipes: res.data.meals });
      });
    } else {
      // Si un input est fourni, on recherche des recettes spécifiques
      RecipeService.SearchInput(input).then((res: AxiosResponse) => {
        setData({ recipes: res.data.meals || [] });
      });
    }
  }, [input]); // L'effet est déclenché à chaque changement d'input

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div className="container">
      <h1>React Cook</h1>

      <form>
        <input
          onChange={handleChange}
          value={input}
          type="text"
          placeholder="taper le nom d'un aliment (en anglais)"
        />
      </form>

      {
        <div className="recipe-container">
          {data.recipes.length > 0 ? (
            data.recipes
              .slice(0, 24)
              .map((recipe) => <Card key={recipe.idMeal} recipe={recipe} />)
          ) : (
            <p>Aucune recette trouvée.</p>
          )}
        </div>
      }
    </div>
  );
};
