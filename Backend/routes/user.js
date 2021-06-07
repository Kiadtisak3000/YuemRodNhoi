var expressFunction = require("express");
const router = expressFunction.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

var Schema = require("mongoose").Schema;

const userSchema = Schema(
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

let User;
try {
  User = mongoose.model("users");
} catch (error) {
  User = mongoose.model("users", userSchema);
}

const makeHash = async (plainText) => {
  const result = await bcrypt.hash(plainText, 10);
  return result;
};

const insertUser = (dataUser) => {
  return new Promise((resolve, rejects) => {
    var new_user = new User({
      username: dataUser.username,
      password: dataUser.password,
      email: dataUser.email,
      firstname: dataUser.firstname,
      lastname: dataUser.lastname,
      dateofbirth: dataUser.dateofbirth,
    });

    new_user.save((err, data) => {
      if (err) {
        rejects(new Error("Cannot insert user to DB! "));
      } else {
        resolve({ message: "Sign up successfully" });
      }
    });
  });
};

router.route("/signup").post((req, res) => {
  makeHash(req.body.password)
    .then((hashText) => {
      const playload = {
        username: req.body.username,
        password: hashText,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        dateofbirth: req.body.dateofbirth,
      };
      console.log(playload);

      insertUser(playload)
        .then((result) => {
          console.log(result);
          res.status(200).json(result);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {});
});

module.exports = router;
