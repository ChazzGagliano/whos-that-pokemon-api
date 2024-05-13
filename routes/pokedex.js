import { Router } from "express";
import axios from "axios";

const router = Router();

router.get(`/pokedex`, async (req, res) => {
  ;
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/`
  );
  res.json(data);

});

export default router;