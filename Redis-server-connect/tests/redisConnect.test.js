import {
  shutdown,
  startup,
  handlePostReq,
  handleGetReq,
  handleGetAllReq,
  postToRedis,
  handleDeleteReq,
} from "../files/redisConnect.js";

const autoFillKey = "zONHF73w_4M3cmv7GZpXG";
const autoFillUrl = "localhost:3000";
const autoFillKey2 = "zONHF73w_4M3cmv7GZpXc";
const autoFillUrl2 = "localhost:3000";

describe("get all keys", () => {
  it("fails", async () => {
    let value = await handleGetAllReq();
    expect(value).toEqual({});
  });
});

describe("get all keys when only one is there", () => {
  it("works", async () => {
    await postToRedis(autoFillKey2, autoFillUrl2);
    let value = await handleGetAllReq();
    expect(value).toEqual({ [autoFillKey2]: autoFillUrl2 });
  });
});

describe("post", () => {
  it("works", async () => {
    let v = await handlePostReq("localhost:3001");
    let value = await handleGetReq(v);
    expect(value).toEqual("localhost:3001");
  });
});

describe("check for duplicate posts", () => {
  it("works", async () => {
    await postToRedis(autoFillKey, autoFillUrl);
    let getallReq2 = await postToRedis(autoFillKey, autoFillUrl);
    expect(getallReq2).toEqual(0);
  });
});

describe("delete key", () => {
  it("works", async () => {
    let deleteReq = await handleDeleteReq(autoFillKey);
    expect(deleteReq).toEqual(1);
  });
});

describe("get all keys", () => {
  it("fails", async () => {
    let value = await handleGetAllReq();
    expect(value).not.toEqual({});
  });
});

beforeAll(() => {
  startup("test");
});

afterAll(async () => {
  await shutdown(true);
});
