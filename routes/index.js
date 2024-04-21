import pokemonRoutes from "./pokemon.js"

const constructorMethod = (app) => {
    app.use("/pokemon", pokemonRoutes);
    app.use("*", (req, res) => {
      res.status(404).json({ error: "This route does not exist" });
    });

  };
  
  export default constructorMethod;