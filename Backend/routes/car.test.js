const { connect } = require("../testdb");
connect();
const { addCar, deleteCar, getCars, updateCar } = require("./car.db.js");
jest.setTimeout(12000);
const Testdata = {
  type: "pick up",
  name: "toyota hilux",
  detail: "red color",
  file: "undifine",
  img: "img",
};
let id;
(async () => {
  const res = await getCars();
  id = res[0]._id;
})();
test("Add Cars Test", async () => {
  const add = await addCar(Testdata);
  expect(JSON.stringify(add)).toBe(
    JSON.stringify({ message: "Car added successfully" })
  );
});
test("Updata Car Test", async () => {
  const update = await updateCar(id, Testdata);
  expect(JSON.stringify(update)).toBe(
    JSON.stringify({ message: "Car update successfully." })
  );
});
const Del = async (id) => await deleteCar(id);
test("Delete Car Test", async () => {
  let test;
  const deletecar = await Del(id);
  expect(JSON.stringify(deletecar)).toBe(
    JSON.stringify({ message: "Car deleted successfully." })
  );
  try {
    test = await Del(id);
  } catch (e) {
    test = false;
  }
  expect(test).toBe(false);
});
