const mongoose = require("mongoose");
const UserModel = require("../src/models/user.js");
const userData = {
  name: "Ronaldinho",
  email: "user@mail.com",
  password: "password",
  dob: new Date()
};

describe("User Model Test", () => {
  // It's just so easy to connect to the MongoDB Memory Server
  // By using mongoose.connect
  beforeAll(async () => {
    mongoose.set("useUnifiedTopology", true);
    await mongoose.connect(
      global.__MONGO_URI__,
      { useNewUrlParser: true, useCreateIndex: true },
      (err) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      }
    );
  });

  it("create & save user successfully", async () => {
    const validUser = new UserModel(userData);
    const savedUser = await validUser.save();
    expect(savedUser._id).toBeDefined();
    expect(savedUser.name).toBe(userData.name);
    expect(savedUser.email).toBe(userData.email);
    expect(savedUser.password).toBe(userData.password);
    expect(savedUser.dob).toBe(userData.dob);
  });

  it("creates user without excess information", async () => {
    const userWithInvalidField = new UserModel({
      name: "Ronaldinho",
      email: "test@mail.com",
      password: "password",
      dob: new Date(),
      nickname: "Handsome TekLoon",
    });
    const savedUserWithInvalidField = await userWithInvalidField.save();
    expect(savedUserWithInvalidField._id).toBeDefined();
    expect(savedUserWithInvalidField.nickkname).toBeUndefined();
  });

  it("should fail to create user without necessary information", async () => {
    const userWithoutRequiredField = new UserModel({ name: "Ronaldinho" });
    console.log(userWithoutRequiredField)
    let err;
    try {
      const savedUserWithoutRequiredField = await userWithoutRequiredField.save();
      error = savedUserWithoutRequiredField;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.email).toBeDefined();
  });
});
