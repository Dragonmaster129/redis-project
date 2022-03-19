const redis = require("redis");
const Str = require("@supercharge/strings");

const redisClient = redis.createClient();
let keyPrefix = "standard";

export async function startup(prefix = "standard") {
  keyPrefix = prefix;
  console.log("starting");
  redisClient.on("error", (err) => console.log("Redis Client Error", err));

  await redisClient.connect();

  await redisClient.set("key", "value");
  const value = await redisClient.get("key");
  await redisClient.del("key");
}

export async function shutdown(cleanup = false) {
  if (cleanup) {
    let keysToCleanup = await redisClient.keys(keyPrefix + "*");
    keysToCleanup.forEach(async (element) => {
      await redisClient.del(element);
    });
  }
  try {
    await redisClient.quit();
  } catch (err) {
    console.log(err);
  }
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

export async function handleGetAllReq() {
  return await redisClient.keys("*");
}

export async function handleGetReq(key) {
  return await redisClient.get(key);
}

export async function postToRedis(key, url) {
  key = keyPrefix + key;
  const results = await redisClient.get(key);
  if (results != null) {
    return 0;
  } else {
    return redisClient.set(key, url).catch((err) => console.log(err));
  }
}

export async function handlePostReq(req) {
  // What is needed to get info from the DB

  const random = Str.random();
  console.log(random);
  // 'zONHF73w_4M3cmv7GZpXG'

  // TODO it only returns OK, not supposed to.

  return await postToRedis(random, req);
}

app.get("/links", function (req, res) {
  // retrieve all the links
  res.send(`Hello World getter`);
});

app.post("/link", function (req, res, next) {
  // add key and value in db
  console.log(req.body);
  res.send("Hello there posty");
});

app.delete("/link/:key", function (req, res) {
  // remove key value pair
  console.log(req.params.key);
  res.send("Hello there deleter");
});

// TODO
// set up redis communication
// send command to redis
// recieve data and parse
