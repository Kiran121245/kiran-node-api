/**
 * @jest-environment node
 */

import request from "supertest";
import app from "../src/index"; // export app separately

describe("POST /add", () => {
  it("should return correct sum", async () => {
    const response = await request(app).post("/add").send({ a: 5, b: 7 });

    expect(response.status).toBe(200);
    expect(response.body.result).toBe(12);
  });
});
