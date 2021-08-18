const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const homeRoute = require("./routes/homeRoute");
const importantRoute = require("./routes/importantRoute");
const tasksRoute = require("./routes/tasksRoute");
const customRoute = require("./routes/customRoute");
const dotenv = require('dotenv')
dotenv.config({path: __dirname + '/.env'});
const app = express();t
const url = process.env.MONGO_URI

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(homeRoute);
app.use(importantRoute);
app.use(tasksRoute);
app.use(customRoute);

mongoose.connect(
 url,
  {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);

let port = process.env.PORT;
if(port == null || port == "") {
  port = 4000
}

app.listen(port, function () {
  console.log("server running");
});
