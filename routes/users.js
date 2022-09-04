import express from "express";
import { verifyToken } from "../utils/verifyToken.js";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/controlUser.js";

const router = express.Router();

//CREATE /POST *use user Register function in coontrolAuth instead*
//router.post("/", createUser);

//verify token to grant permisstion
router.get("/checkauth", verifyToken, (req, res, next) => {
  res.send("Hello user, You are now logged in");
});

//UPDATE /PUT
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser);

//GET
router.get("/:id", getUser);

//GET ALL
router.get("/", getUsers);

export default router;
