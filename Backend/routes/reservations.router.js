const { addReservation, getReservations } = require("./reservation.db");
exports.reservations_add = (req, res) => {
  console.log("add");
  addReservation(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(401)
    });
};
exports.reservations_get = (req, res) => {
  getReservations()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
        res.status(406)
    });
};
