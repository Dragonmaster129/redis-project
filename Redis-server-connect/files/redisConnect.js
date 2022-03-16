const redis = require("redis");

const client = redis.createClient();
const Str = require("@supercharge/strings");

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
app.use(express.json());

export function set(setting, val) {
  app.set(setting, val);
}

export function get(setting) {
  app.get(setting);
}

export function listen(port, callback) {
  app.listen(port, callback);
}

// CRUD functionality
// Create - Post
// Read - Get
// Update - Put
// Delete - Delete

export function handleGetReq(req) {
  // What is needed to get info from the DB

  const random = Str.random();
  console.log(random);
  // 'zONHF73w_4M3cmv7GZpXG'

  redis.set(random, req);

  return redis.get(random);
}

app.get("/links", function (req, res) {
  // Put the functionality in here
  // retrieve all the links
  res.send(`Hello World getter`);
});

app.post("/link", function (req, res, next) {
  // console.log(req);
  console.log(req.body);
  res.send("Hello there posty");
});

app.delete("/link/:key", function (req, res) {
  // remove key value pair
  console.log(req.params.key);
  res.send("Hello there deleter");
});

// app.listen(3001);

// const contactRedis = () => {
//   // TODO
//   // set up redis communication
//   // send command to redis
//   // recieve data and parse
// };
