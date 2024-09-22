import { Recipe } from "../components/Recipe";

export const Accueil = () => {
  return (
    <div className="container">
      <h1>React Cook</h1>

      <form>
        <input
          type="text"
          placeholder="taper le nom d'un aliment (en anglais)"
        />
      </form>

      <Recipe />
    </div>
  );
};
