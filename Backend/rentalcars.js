const expressFunction = require("express");
const { cors } = require("./middleware/frontendcors.middle.js");
const { Database_Connect } = require("./middleware/database.middle.js");
var expressApp = expressFunction();

const {
  car_get,
  car_del,
  car_add,
  car_update,
} = require("./routes/cars.router.js");
expressApp.use(cors);
expressApp.use(expressFunction.json());
expressApp.use(Database_Connect);

expressApp.route("/cars/deletecars/:id").delete(car_del);
expressApp.post("/cars/addcars", car_add);
expressApp.get("/cars/get", car_get);
expressApp.put("/cars/updatecar/:id", car_update);

const {
  reservations_add,
  reservations_get,
} = require("./routes/reservations.router.js");
expressApp.post("/reservations/addreservations", reservations_add);
expressApp.get("/reservations/get", reservations_get);

expressApp.use("/user", require("./routes/user"));
expressApp.use("/login", require("./routes/signin"));
const port = process.env.port;
expressApp.listen(port, function () {
  console.log("Listening on port", port);
});
