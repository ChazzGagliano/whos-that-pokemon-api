import { Router } from "express";
import axios from "axios";

const router = Router();

router.get(`/index`, async (req, res) => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=20&limit=1302`
  );
  res.json(data);
});


export default router;