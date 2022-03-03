const redis = require("redis");

const client = redis.createClient();

export async function startup() {
  console.log("starting");
  client.on("error", (err) => console.log("Redis Client Error", err));

  await client.connect();

  await client.set("key", "value");
  const value = await client.get("key");
}

export function shutdown() {
  client.disconnect();
}

// Express Node Module
const express = require("express");
const app = express();

// Using express.urlencoded middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);

// CRUD functionality
// Create - Post
// Read - Get
// Update - Put
// Delete - Delete

export function handleGetReq(req) {
  // What is needed to get info from the DB

  return 1;
}

app.get("/", function (req, res) {
  // Put the functionality in here
  res.send(`Hello World`);
});

app.post("/", function (req, res) {
  res.send("Hello there");
});

// app.listen(3001);

// const contactRedis = () => {
//   // TODO
//   // set up redis communication
//   // send command to redis
//   // recieve data and parse
// };
