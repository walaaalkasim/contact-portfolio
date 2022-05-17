require("dotenv").config();
const express = require("express");
const app = express();

const contactRouter = require("./contactRouter");

const port = process.env.PORT || 8081;

app.use(express.json());

console.log(process.argv);

let allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
};

app.use(allowCrossDomain);

app.use("/", contactRouter); //no log

app.listen(port, () =>
  console.log(`Server started to run at the port ${port}`)
);
