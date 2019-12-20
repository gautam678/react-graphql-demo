// let's go!
const dotenv = require("dotenv");

require("dotenv").config({ path: "variables.env" });

const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

//TODO use express middleware to handle cookies

// TODO use express middleware to populate current users

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  details => console.log(`server is running on port ${details.port}`)
);
