import { shutdown, startup, handleGetReq } from "../files/redisConnect.js";

describe("redisConnect", () => {
  it("works", async () => {
    const redis = await handleGetReq("localhost:3000");
    expect(redis).toEqual("localhost:3000");
  });
});

beforeAll(() => {
  return startup();
});

afterAll(() => {
  return shutdown();
});
