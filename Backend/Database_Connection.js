const mongoose = require("mongoose");
require("dotenv").config()
const config = require("./config/mongodb.json")
const url = process.env.db+"/rentalcars";
exports.Database_Connect = () => {
    mongoose
      .connect(url, config)
      .then(() => {
        console.log("MongoDB Server Connected");
      })
      .catch((error) => {
        new Error(error)
      });
  }