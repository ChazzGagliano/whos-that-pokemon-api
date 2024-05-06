import easyRoutes from "./easy.js"
import hardRoutes from "./hard.js"
import johtoRoutes from "./johto.js"

const constructorMethod = (app) => {
    app.use("/easy", easyRoutes);
    app.use("/hard", hardRoutes);
    app.use("/johto", johtoRoutes)
    app.use("*", (req, res) => {
      res.status(404).json({ error: "This route does not exist" });
    });

  };
  
  export default constructorMethod;