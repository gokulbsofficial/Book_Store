require("dotenv").config()

const ENV_STATE = process.env.ENV_STATE || false;
const SERVER_ENV = process.env.SERVER_ENV || "production";
const SERVER_PORT = process.env.SERVER_PORT || 5000;
const MONGO_HOST = process.env.MONGO_HOST || "localhost";
const MONGO_USER = process.env.MONGO_USER || "root";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "password";
const MONGO_DATABASE = process.env.MONGO_DATABASE || "BookStore";
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_SVG = process.env.MONGO_SVG || false;

const SERVER = {
  SERVER_ENV,
  SERVER_PORT,
  ENV_STATE,
};

const MONGO = {
  MONGO_HOST,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_DATABASE,
  MONGO_PORT,
  MONGO_SVG,
};

module.exports = {
  MONGO,
  SERVER,
};