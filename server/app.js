const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const PRIVITE_KEY = "@NuutsTulkhuur";
const database = require("./db");
database.connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// register new OWNER  API fetch(URL + "/owners") method:"PUT/PATCH"
app.post("/owners", async (req, res) => {
  try {
    const owner = req.body;
    const existhing = await database.findOwnerByName(owner.name);
    if (existhing) {
      res.send({ success: 0, error: "The ownername is existhing" });
      return;
    }
    owner.password = bcrypt.hashSync(owner.password, 10);
    const result = await database.addOwner(owner);
    res.send({ success: 1, data: result });
  } catch (error) {
    console.log({ success: 0, error: "New Owner Error" });
  }
});

// login API fetch(URL + "/owners/login") method:"POST"
app.post("/owners/login", async (req, res) => {
  try {
    const { name, password } = req.body;
    const result = await database.findOwnerByName(name);
    console.log(result);
    if (result) {
      if (bcrypt.compareSync(password, result.password)) {
        res.send({ success: 1, data: result });
      } else {
        res.send({ success: 1, error: "Wrong Password" });
      }
    } else {
      console.log({ success: 0, error: "Wrong User" });
    }
  } catch (error) {
    console.log({ success: 0, error: "Login Error" });
  }
});

// Find All owners
app.get("/owners", async (req, res) => {
  try {
    const result = await database.getAllOwners();
    res.send({ success: 1, data: result });
  } catch (error) {
    console.log({ success: 0, error: "Find all owners Error" });
  }
});

// Find one owner by name
app.get("/owners/:name", async (req, res) => {
  try {
    const ownername = req.params.name;
    const result = await database.findOwnerByName(ownername);
    res.statusCode(200).send({ success: 1, data: result });
  } catch (error) {
    console.log({ success: 0, error: "Find one owner by name Error" });
  }
});

// list food API fetch(URL + "/owners/food")
// add food API fetch(URL + "/owners/food") method:"PUT/PATCH"
// edit food API fetch(URL + "/owners/food/name") method:"PUT/PATCH"
// delete food API fetch(URL + "/owners/food/name") method:"PUT/PATCH"
// list note API fetch(URL + "/owners/note")
// add note API fetch(URL + "/owners/note") method:"PUT/PATCH"

app.listen(3000, console.log(`listening 3000`));
