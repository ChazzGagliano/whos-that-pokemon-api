import { Router } from "express";
import axios from "axios";

const router = Router();

router.get(`/:id`, async (req, res) => {
  const { id } = req.params;
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  res.json(data);
});

router.get(`/:search`, async (req, res) => {
  const { searchTerm } = req.params;
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
  );
  res.json(data);
});

export default router;