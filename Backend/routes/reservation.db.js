const mongoose = require("mongoose");
const { reservationsSchema } = require("../Schema/reservation.js");
let Reservation;
try {
  Reservation = mongoose.model("reservations");
} catch (error) {
  Reservation = mongoose.model("reservations", reservationsSchema);
}
exports.addReservation = (reservationData) => {
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

exports.getReservations = () => {
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
