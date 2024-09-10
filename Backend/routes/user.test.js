const { insertUser } = require("./user");
const { compareHash, findUser } = require("./signin");
const { connect } = require("../testdb.js");
connect();
const TestData = {
  _id: "dsafgasgasdga",
  username: "abc",
  password: "defg",
  email: "hijk@lmn.com",
  firstname: "abc",
  lastname: "xyz",
  dateofbirth: "1/2/3",
};
jest.setTimeout(12000);
test("SignUp Test", async () => {
  const SignUp = await insertUser(TestData);
  expect(JSON.stringify(SignUp)).toBe(
    JSON.stringify({ message: "Sign up successfully" })
  );
  const errortest = await insertUser(TestData);
  expect(errortest).toBe("Cannot insert user to DB! ");
});
test("CompareHash Test", async () => {
  const compare = await compareHash(
    "testnaja",
    "$2a$10$lnfvvLMRofShF0LGehzlve9RNJmx1ZeiAvgmk5rqYwW9YjF/Z9Ixe"
  );
  expect(JSON.stringify(compare)).toBe(JSON.stringify({ status: true }));
  const fcompare = await compareHash("testnaja", "gg ez");
  expect(JSON.stringify(fcompare)).toBe(JSON.stringify({ status: false }));
});
test("Login Test", async () => {
  const login = await findUser(TestData.username);
  expect(JSON.stringify(login)).toBe(
    JSON.stringify({
      id: login.id,
      username: TestData.username,
      password: TestData.password,
    })
  );
  let error = "none"
  try{
    await findUser(Math.random());
  }catch(e){
    error = e.message
  }
  expect(error).toBe("Cannot find Usename")
});
