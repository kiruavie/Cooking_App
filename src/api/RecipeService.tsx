import axios from "axios";

export class RecipeService {
  private static URL: string = `https://www.themealdb.com/api/json/v1/1/search.php?s`;

  public static getAllRecipes = () => {
    const recipeURL: string = `${this.URL}`;
    return axios.get(recipeURL);
  };

  public static SearchInput = (query: string) => {
    const search: string = `${this.URL}=${query}`;
    return axios.get(search);
  };
}
