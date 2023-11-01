const express = require("express");
const { uploadData, getAllData } = require("../controllers/studentControllers");

const studentRouter = express.Router();

studentRouter.post("/upload-data", uploadData);
studentRouter.get("/getAll-data", getAllData);

module.exports = { studentRouter };
