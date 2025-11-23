/**
 * @jest-environment node
 */ 

import request from "supertest";
import app from "../src/index";

// HEALTH TEST
describe("API Basic Tests", () => {
  test("GET /hello should return greeting", async () => {
    const res = await request(app).get("/hello");
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Hello Kiran!");
  });

  test("GET /time should return current time", async () => {
    const res = await request(app).get("/time");
    expect(res.status).toBe(200);
    expect(res.body.time).toBeDefined();
  });

  test("GET /users should return list", async () => {
    const res = await request(app).get("/users");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.users)).toBe(true);
  });

  test("GET /welcome should return welcome message", async () => {
    const res = await request(app).get("/welcome");
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Welcome to Kiran API!");
  });


});
