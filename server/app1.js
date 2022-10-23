const express = require("express");
const cors = require("cors");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const PRIVITE_KEY = "Myprivatekey";

const database = require("./db1");
database.connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// New user
app.post("/users", async (req, res, next) => {
  try {
    const user = req.body;
    const existing = await database.getUserByName(user.username);
    if (existing) {
      res.send({ success: 0, error: "The username is existhing" });
      return;
    }
    user.password = bcrypt.hashSync(user.password, 10);
    const result = await database.addUser(user);
    res.send({ success: 1, data: result });
  } catch (error) {
    console.log({ success: 0, error: "New User Error" });
  }
});

// Login
app.post("/users/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const result = await database.getUserByName(username);
    if (result) {
      if (bcrypt.compareSync(password, result.password)) {
        const token = jwt.sign({ username }, PRIVITE_KEY, {
          expiresIn: 60 * 60,
        });

        res.send({ success: 1, data: token });
      } else {
        res.send({ success: 0, error: "Wrong password" });
      }
    } else {
      console.log({ success: 0, error: "Wrong Username" });
    }
  } catch (error) {
    console.log({ success: 0, error: "Login Error" });
  }
});

// All users
function authorize(req, res, next) {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, PRIVITE_KEY, (error, data) => {
      if (error) {
        res.send({ success: 0, error: "Wrong token" });
        return;
      }
      next();
    });
  } else {
    res.send({ success: 0, error: "Require a token" });
  }
}
app.get("/users", authorize, async (req, res, next) => {
  try {
    const result = await database.getAllUSers();
    res.send({ success: 1, data: result });
  } catch (error) {
    res.send({ success: 0, error: "All Users Error" });
  }
});

app.listen(4000, console.log("lintens 4000"));
