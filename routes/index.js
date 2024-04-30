import easyRoutes from "./easy.js"

const constructorMethod = (app) => {
    app.use("/easy", easyRoutes);
    app.use("*", (req, res) => {
      res.status(404).json({ error: "This route does not exist" });
    });

  };
  
  export default constructorMethod;