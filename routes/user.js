import { Router } from "express";
import { users } from "../config/mongoCollections.js";
import bcrypt from "bcrypt";


const router = Router();
router.post("/signup", async (req, res) => {
  const userCollection = await users();
  let hashedPassword = await bcrypt.hash(req.body.password, 12);
  let user = {
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  };
  const checkIfUserExists = await userCollection.findOne({
    email: req.body.email,
  });
  if (checkIfUserExists !== null)
    return res.json({ error: "An account with that email already exists" });

  await userCollection.insertOne(user);
  return res.status(200).json(user);
});

export default router;
