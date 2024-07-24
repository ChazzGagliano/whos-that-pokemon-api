import easyRoutes from "./easy.js"
import hardRoutes from "./hard.js"
import johtoRoutes from "./johto.js"
import pokedexRoutes from "./pokedex.js"
import pokemonRoutes from "./pokemon.js"
import userRoutes from "./user.js"

const constructorMethod = (app) => {
    app.use("/easy", easyRoutes);
    app.use("/hard", hardRoutes);
    app.use("/johto", johtoRoutes)
    app.use("/pokedex", pokedexRoutes)
    app.use("/pokemon", pokemonRoutes)
    app.use("/user", userRoutes)
    app.use("*", (req, res) => {
      res.status(404).json({ error: "This route does not exist" });
    });

  };
  
  export default constructorMethod;