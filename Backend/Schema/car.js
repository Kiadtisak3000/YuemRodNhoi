var Schema = require("mongoose").Schema;
module.exports.carsSchema = Schema({
    type: String,
    name: String,
    detail: String,
    file: String,
    img: String
  }, {
    collection: 'cars'
  });