const mongoose = require("mongoose");
require("dotenv").config()
const config = require("../config/mongodb.json")
const url = process.env.db+"/rentalcars";
exports.Database_Connect = (req, res, next) => {
    mongoose
      .connect(url, config)
      .then(() => {
        console.log("Connected to MongoDB...");
        next();
      })
      .catch((error) => {
        console.log("Cannot connect to MongoDB");
        res.status(501).send("Cannot connect to MongoDB");
      });
  }