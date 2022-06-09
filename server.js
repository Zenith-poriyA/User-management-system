//This file allows us to start server

const express = require("express");
const dotenv = require("dotenv");

//morgan is message logger - every time when you make a request
const morgan = require("morgan");

//allow to use the data form body properties
const bodyparser = require("body-parser");
const path = require("path");

//connection import
const connectDB = require("./server/database/connection");

const app = express();

//configration for dotenv file
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

//log request
app.use(morgan("tiny")); //this is for the log request of the application

//mongoDB connection
connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs"); //you can put html or pug or any other template
// app.set("views",path.resolve(__dirname,"views/ejs"));    if we create js template in other folder so we can give the path of the file

//load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css"))); //if we have style.css file in css folder so we can directly assign /css with /css/style.css
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

//load router
app.use("/", require("./server/routes/router"));
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
