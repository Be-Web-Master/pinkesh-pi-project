const express = require("express");
const { createNewUser, signIn } = require("../controllers/userControllers");

const userRouter = express.Router();

userRouter.post('/create-user', createNewUser)
userRouter.post("/signin-user", signIn);

module.exports = { userRouter };
