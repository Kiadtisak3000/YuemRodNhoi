const expressFunction = require("express");
const mongoose = require("mongoose");
const { cors } = require("./middleware/frontendcors.middle.js");
const { Database_Connect } = require("./middleware/database.middle.js");
var expressApp = expressFunction();
const { reservationsSchema } = require("./Schema/reservation.js");
let Reservation;
try {
  Reservation = mongoose.model("reservations");
} catch (error) {
  Reservation = mongoose.model("reservations", reservationsSchema);
}
const {car_get,car_del,car_add,car_update} = require("./routes/cars.router.js")
expressApp.use(cors);
expressApp.use(expressFunction.json());
expressApp.use(Database_Connect);

expressApp.route("/cars/deletecars/:id").delete(car_del);

expressApp.post("/cars/addcars",car_add);

expressApp.get("/cars/get",car_get);

expressApp.put("/cars/updatecar/:id",car_update);
//Reservations
const addReservation = (reservationData) => {
  return new Promise((resolve, reject) => {
    var new_reservation = new Reservation(reservationData);
    new_reservation.save((err, data) => {
      if (err) {
        reject(new Error("Cannot insert Reservation to DB!"));
      } else {
        resolve({ message: "Reservation added successfully" });
      }
    });
  });
};

const getReservations = () => {
  return new Promise((resolve, reject) => {
    Reservation.find({}, (err, data) => {
      if (err) {
        reject(new Error("Cannot get reservation!"));
      } else {
        if (data) {
          resolve(data);
        } else {
          reject(new Error("Cannot get reservation!"));
        }
      }
    });
  });
};

expressApp.post("/reservations/addreservations", (req, res) => {
  console.log("add");
  addReservation(req.body)
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

expressApp.get("/reservations/get", (req, res) => {
  console.log("get");
  getReservations()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

expressApp.use("/user", require("./routes/user"));
expressApp.use("/login", require("./routes/signin"));
const port = process.env.port;
expressApp.listen(port, function () {
  console.log("Listening on port", port);
});
