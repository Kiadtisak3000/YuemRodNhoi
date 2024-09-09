const mongoose = require("mongoose");
const { response, request } = require("express");
const { getCars, deleteCar, addCar, updateCar} = require("./car.db.js");
exports.car_get = (req, res) => {
  getCars()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(406);
    });
};
exports.car_del = (req, res) => {
  deleteCar(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(404);
    });
};
exports.car_add = (req, res) => {
  addCar(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {res.status(405)});
};
exports.car_update =  (req, res) => {
  updateCar(req.params.id, req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400)
    });
}
