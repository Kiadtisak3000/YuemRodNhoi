const mongoose = require("mongoose");
require("dotenv").config()
const config = require("./config/mongodb.json")
const url = process.env.db;
exports.connect = () => {
  mongoose
    .connect(url, config)
    .then(() => {
    })
    .catch((error) => {

    });
};
