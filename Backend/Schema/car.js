var Schema = require("mongoose").Schema;
const mongoose = require("mongoose");
exports.carsSchema = Schema({
    type: String,
    name: String,
    detail: String,
    file: String,
    img: String
  }, {
    collection: 'cars'
  });
