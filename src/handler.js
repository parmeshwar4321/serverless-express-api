const serverless = require("serverless-http");
const express = require("express");
require("dotenv").config();
require("./config/dbConfig");
require("express-async-errors");
const PORT = process.env.PORT || 3000;
const app = express();


//routes
const testRoute = require("./routes/index");
const middleware = require("./utils/middleware");

//for test
app.get("/", (req, res) => res.send({ msg: "welcome to my application" }));

//middlewears
app.use(express.json());



app.use("/api", testRoute);

//errroHandelers
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);


module.exports.handler = serverless(app);
