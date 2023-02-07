const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");
const router = require('./src/router/user.router')

require("dotenv").config({ path: "./config.env" });

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./db/connect");

const port = process.env.PORT;

app.use(helmet());

app.use("/user",router);


app.listen(port, () => {
    console.log(`server is starting on port ${port}`);
  });

