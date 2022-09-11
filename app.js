var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes");
const sequelize = require("./config/db");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

sequelize
  .sync({ force: true })
  .then((result) => {
    console.log(`✔ Database connection successful`);
  })
  .catch((err) => {
    console.error("Error while creating tables...");
    console.log(err);
  });

module.exports = app;
