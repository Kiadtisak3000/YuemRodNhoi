const mongoose = require("mongoose");
const { carsSchema } = require("../Schema/car.js");

let Car;
try {
  Car = mongoose.model("cars");
} catch (error) {
  Car = mongoose.model("cars", carsSchema);
}
exports.getCars = () =>
  new Promise((resolve, reject) => {
    Car.find({}, (err, data) => {
      if (err) {
        reject(new Error("Cannot get cars!"));
      } else {
        if (data) {
          resolve(data);
        } else {
          reject(new Error("Cannot get cars!"));
        }
      }
    });
  });
exports.addCar = (carData) =>
  new Promise((resolve, reject) => {
    var new_car = new Car(carData);
    new_car.save((err, data) => {
      if (err) {
        reject(new Error("Cannot insert Car to DB!"));
      } else {
        resolve({ message: "Car added successfully" });
      }
    });
  });
exports.deleteCar = async (id) =>
  new Promise((resolve, reject) => {
    Car.deleteOne({ _id: id }, (err, data) => {
      if (err) {
        reject(new Error(err + "Cannot Delete this Car"));
      } else {
        resolve({ message: "Car deleted successfully." });
      }
    });
  });
exports.updateCar = async (id, data) =>
  new Promise((resolve, reject) => {
    if (id === undefined) {
      reject(new Error("Cannot update Cars"));
    }
    Car.updateOne({ _id: id }, { $set: data }, (err, data) => {
      if (err) {
        reject(new Error("Cannot update Car"));
      } else {
        resolve({ message: "Car update successfully." });
      }
    });
  });
