const mongoose = require("mongoose");
const TeamModel = require("../src/models/teams.js");
const userData = {
  name: "Gremio",
  colorOne: "teal",
  colorTwo: "black",
  dob: new Date()
};

describe("Team Model Test", () => {
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
    const validTeam = new TeamModel(userData);
    const savedTeam = await validTeam.save();
    expect(savedTeam._id).toBeDefined();
    expect(savedTeam.name).toBe(userData.name);
    expect(savedTeam.colorOne).toBe(userData.colorOne);
    expect(savedTeam.colorTwo).toBe(userData.colorTwo);
    expect(savedTeam.dob).toBe(userData.dob);
  });

  it("should fail to create user without necessary information", async () => {
    const userWithoutRequiredField = new TeamModel({ name: "Gremio" });
    let err;
    try {
      const savedUserWithoutRequiredField = await userWithoutRequiredField.save();
      error = savedUserWithoutRequiredField;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.colorOne).toBeDefined();
  });
});
