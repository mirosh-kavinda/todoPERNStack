import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import TaskManager from "../taskManager";
import taskRepository from "../../repositories/taskRepo";
import "@testing-library/jest-dom"; 


const tasks = [
  { id: 1, title: "Task 1", description: "Desc 1", completed: false },
  { id: 2, title: "Task 2", description: "Desc 2", completed: true },
];

taskRepository.fetchTasks.mockResolvedValue(tasks);

test("fetches and displays tasks", async () => {
  render(<TaskManager />);

  await waitFor(() => expect(taskRepository.fetchTasks).toHaveBeenCalled());

  expect(screen.getByText("Task 1")).toBeInTheDocument();
  expect(screen.queryByText("Task 2")).not.toBeInTheDocument(); // Completed tasks should not be shown
});
