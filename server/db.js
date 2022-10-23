const { MongoClient, ObjectId } = require("mongodb");

const URI = "mongodb://localhost:27017";
const COLLECTION_NAME = "owners";

const mongo = new MongoClient(URI);

let db = null;

// Connect to MongoDB database
exports.connectDB = async () => {
  try {
    const client = await mongo.connect();
    console.log(`DB CONNECTED ...`);
    db = client.db("last");
  } catch (error) {
    console.log(`DB Error: `, error);
  }
};

// Add new onwer
exports.addOwner = (owner) => {
  return new Promise((resolve, reject) => {
    db.collection(COLLECTION_NAME)
      .insertOne(owner)
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

// Find one owner by name
exports.findOwnerByName = (ownername) => {
  return new Promise((resolve, reject) => {
    db.collection(COLLECTION_NAME)
      .findOne({ name: ownername })
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

// Find All owners
exports.getAllOwners = () => {
  return new Promise((resolve, reject) => {
    db.collection(COLLECTION_NAME)
      .find()
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
};
