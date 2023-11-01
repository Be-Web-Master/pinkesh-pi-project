const express = require("express");
const { userRouter } = require("./userRouter");
const { studentRouter } = require("./studentRouter");

const indexRouter = express.Router();
indexRouter.use("/user", userRouter);
indexRouter.use("/data", studentRouter);




module.exports = {
  indexRouter,
};
