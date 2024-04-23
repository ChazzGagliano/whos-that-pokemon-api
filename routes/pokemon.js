import { Router } from "express";
import axios from "axios";

const router = Router();

router.get(`/random`, async (req, res) => {
  const number = Math.floor(Math.random() * 151);
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${number}`
  );
  res.json(data);
});

export default router;
