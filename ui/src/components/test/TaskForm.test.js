import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; 
import TaskForm from "../taskForm";

test("renders form inputs and submit button", () => {
  render(<TaskForm addTask={jest.fn()} />);

  expect(screen.getByPlaceholderText("Title")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Description")).toBeInTheDocument();
  expect(screen.getByText("Add")).toBeDisabled();
});

test("enables submit button when inputs are filled", () => {
  render(<TaskForm addTask={jest.fn()} />);
  const titleInput = screen.getByPlaceholderText("Title");
  const descInput = screen.getByPlaceholderText("Description");
  const submitButton = screen.getByText("Add");

  fireEvent.change(titleInput, { target: { value: "New Task" } });
  fireEvent.change(descInput, { target: { value: "New Description" } });

  expect(submitButton).not.toBeDisabled();
});

test("calls addTask on form submission", () => {
  const addTaskMock = jest.fn();
  render(<TaskForm addTask={addTaskMock} />);
  
  fireEvent.change(screen.getByPlaceholderText("Title"), { target: { value: "Task 1" } });
  fireEvent.change(screen.getByPlaceholderText("Description"), { target: { value: "Desc 1" } });
  fireEvent.click(screen.getByText("Add"));

  expect(addTaskMock).toHaveBeenCalledWith({ title: "Task 1", description: "Desc 1" });
});
