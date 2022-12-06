const MONGOOSE = require("mongoose");

MONGOOSE.Promise = global.Promise;

const {
  MONGO_HOST,
  MONGO_DATABASE,
  MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_SVG,
  MONGO_USER,
} = require("./config").MONGO;

module.exports = (config) => {
  const URI =
    MONGO_SVG == true
      ? `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DATABASE}?retryWrites=true&w=majority`
      : MONGO_HOST === "localhost"
      ? `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`
      : `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`;

  MONGOOSE.connect(URI);

  let db = MONGOOSE.connection;

  db.once("open", (err) => {
    if (err) {
      throw err;
    }

    console.log("MongoDB is ready!");
  });

  require("../models/Cart");
  require("../models/User");
  require("../models/Role").init();
  require("../models/Receipt");
  require("../models/Book");
  require("../models/Comment");
};
