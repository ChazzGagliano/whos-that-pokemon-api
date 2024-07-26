import { Router } from "express";
import { users } from "../config/mongoCollections.js";
import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";

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

router.post("/login", async (req, res) => {
    const userCollection = await users();
    const { userName } = req.body;
    const { passWord } = req.body;
    const user = await userCollection.findOne({
      username: userName,
    });
  
    console.log(passWord);
    console.log(user);
    let compareToMatch = false;
  
    try {
      compareToMatch = await bcrypt.compare(passWord, user.password);
    } catch (e) {}
    if (!compareToMatch)
      return res.json({ error: "Either the email or password is invalid" });
    console.log({ success: "User authenticated" });
  
    user._id = user._id.toString();
  
    req.session.user = user;
    req.session.save();
    console.log(req.session);
  
    res.json({ user: user, auth: true });
  });


export default router;
