var Schema = require("mongoose").Schema;
exports.reservationsSchema = Schema({
    car: String,
    detail: String,
    name: String,
    tel: String,
    start: String,
    end: String,
    option: String,
    other: String,
  }, {
    collection: 'reservations'
  });
  