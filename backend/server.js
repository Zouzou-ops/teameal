const express = require("express");
const bodyParser = require("body-parser");
const RouteUser = require("./router/user");
const RouteRestaurant = require("./router/restaurant");
const cors = require("cors");

const path = require("path");

// instance of express
const app = express();

//require dotenv and config
require("dotenv").config();

// port
const port = process.env.PORT ;

// connect to DB
const connectDB = require("./config/conectDB");
connectDB();

//express.json(middleware)
app.use(express.json());


app.use(cors());

app.use(bodyParser.json());

//routes
app.use("/api/user", RouteUser);
app.use("/api/restaurant", RouteRestaurant);

//create server
app.listen(port, (error) => {
  error
    ? console.error("can not run the server !!!!")
    : console.log(`server is running on port ${port} ...`);
});

console.clear();
