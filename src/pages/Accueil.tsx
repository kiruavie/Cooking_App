export const Accueil = () => {
  return (
    <div className="container">
      <h1>React Cook</h1>
      <search>
        <form action="./search/">
          <label htmlFor="movie">Find a Movie</label>
          <input type="search" id="movie" name="q" />
          <button type="submit">Search</button>
        </form>
      </search>
    </div>
  );
};
