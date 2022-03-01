import { createClient } from "redis";

(async () => {
  const client = createClient();

  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();

  await client.set("key", "value");
  const value = await client.get("key");
})();

// Express Node Module
const express = require("express");
const app = express();

function handleGetReq(req) {
  // What is needed to get info from the DB
}

app.get("/", function (req, res) {
  // Put the functionality in here
  res.send(`Hello World`);
});

app.listen(3001);

// const contactRedis = () => {
//   // TODO
//   // set up redis communication
//   // send command to redis
//   // recieve data and parse
// };
