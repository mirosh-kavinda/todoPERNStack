import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import TaskCard from "../taskCard";


test("renders tasks' title and description", () => {
  const task = { id: 1, title: "Test Task", description: "Test Description" };
  render(<TaskCard task={task} markDone={jest.fn()} />);

  expect(screen.getByText("Test Task")).toBeInTheDocument();
  expect(screen.getByText("Test Description")).toBeInTheDocument();
});

test("Task Complete button is clicked", () => {
  const task = { id: 1, title: "Test Task", description: "Test Description" };
  const markDoneMock = jest.fn();
  render(<TaskCard task={task} markDone={markDoneMock} />);

  fireEvent.click(screen.getByText("Done"));
  expect(markDoneMock).toHaveBeenCalledWith(task.id);
});
