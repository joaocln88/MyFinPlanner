import database from "infra_fp/database";
import orchestrator from "tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  database.query("drop schema public cascade; create schema public;");
});

test("POST to /api/v1/migrations should return status 200", async () => {
  const response = await fetch("http://localhost:3001/api/v1/migrations");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThan(0);
});
