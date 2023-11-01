const express = require("express");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
require("./dbConfig/dbConfig");
const { indexRouter } = require("./routes/indexRouter");


const app = express();
const { PORT } = process.env;

app.use(cookieParser());
app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log("server is running", PORT);
});
