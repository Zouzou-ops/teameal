// require mongoose
const mongoose = require("mongoose");

//connect to DB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DataBase connected succesfully ...");
  } catch (error) {
    console.log("Can not connect to Database !!!");
  }
};

module.exports = connectDB;
