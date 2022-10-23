const { MongoClient, ObjectId } = require("mongodb");

const URI = "mongodb://localhost:27017";
const COLLECTION_NAME = "users";

const mongo = new MongoClient(URI);

let db = null;

exports.connectDB = async () => {
  try {
    const client = await mongo.connect();
    console.log(`DB CONNECTED`);
    db = client.db("test");
  } catch (error) {
    console.log(error, "DB Error !!!");
  }
};

exports.addUser = (user) => {
  return new Promise((resolve, reject) => {
    db.collection(COLLECTION_NAME)
      .insertOne(user)
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
};

exports.getUserByName = (username) => {
  return new Promise((resolve, reject) => {
    db.collection(COLLECTION_NAME)
      .findOne(username)
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
};

exports.getAllUSers = () => {
  return new Promise((resolve, reject) => {
    db.collection(COLLECTION_NAME)
      .find()
      .toArray()
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
};
