import { shutdown, startup, handleGetReq } from "../files/redisConnect.js";

describe("redisConnect", () => {
  it("works", async () => {
    const redis = await handleGetReq("yay");
    expect(redis).toEqual(1);
  });
});

beforeAll(() => {
  return startup();
});

afterAll(() => {
  return shutdown();
});
