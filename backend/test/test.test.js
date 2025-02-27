const request = require("supertest");
const app = require("../server");

test("GET /tasks should return a list of tasks", async () => {
  const response = await request(app).get("/tasks");
  expect(response.status).toBe(200);
  expect(response.body).toBeInstanceOf(Array);
});

test("POST /tasks should add a new task", async () => {
  const newTask = { title: "New Task", description: "Test description" };
  const response = await request(app).post("/tasks").send(newTask);
  
  expect(response.status).toBe(201);
  expect(response.body.title).toBe(newTask.title);
});
