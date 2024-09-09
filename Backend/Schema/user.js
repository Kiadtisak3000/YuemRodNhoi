var Schema = require("mongoose").Schema;

exports.userSchema = Schema(
  {
    username: String,
    password: String,
    email: String,
    firstname: String,
    lastname: String,
    dateofbirth: String,
  },
  {
    collection: "users",
  }
);