import axios from 'axios'; 
import taskRepository from "../taskRepo";
import "@testing-library/jest-dom"; 

jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  patch: jest.fn(),
}));

test("fetchTasks makes GET request", async () => {
  const tasks = [{ id: 1, title: "Test Task", description: "Test Desc", completed: false }];
  axios.get.mockResolvedValue({ data: tasks });

  const result = await taskRepository.fetchTasks();
  expect(result).toEqual(tasks);
});

test("addTask makes POST request", async () => {
  const task = { title: "New Task", description: "New Desc" };
  axios.post.mockResolvedValue({ data: task });

  const result = await taskRepository.addTask(task);
  expect(axios.post).toHaveBeenCalledWith("http://localhost:5000/api/tasks", task);
  expect(result).toBe(true);
});

test("completeTask makes PATCH request", async () => {
  const id = 1;
  axios.patch.mockResolvedValue({ data: {} });

  const result = await taskRepository.completeTask(id, true);
  expect(axios.patch).toHaveBeenCalledWith(`http://localhost:5000/api/tasks/${id}`, { completed: true });
  expect(result).toBe(true);
});
