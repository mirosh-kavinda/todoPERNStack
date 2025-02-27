import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskCard from "../components/taskCard";
import TaskForm from "../components/taskForm";
import taskRepository from "../repositories/taskRepo";
import { ToastContainer, toast } from "react-toastify";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  //toast message
  const notify = (txt) => toast(txt);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const fetchedTasks = await taskRepository.fetchTasks();
      setTasks(fetchedTasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = async (taskToAdd) => {
    try {
      const res = await taskRepository.addTask(taskToAdd);
      if (res) {
        notify("Task added successfully");
        fetchTasks();
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const completeTask = async (task) => {
    try {
      const res = await taskRepository.completeTask(task);
      if (res) {
        notify("Task completed successfully");
        fetchTasks();
      }
    } catch (error) {
      console.error("Error completing task:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5">
          <TaskForm addTask={addTask} />
        </div>
        <div className="col-7 ps-5 border-start border-3">
          {tasks
            .filter((task) => !task.completed)
            .map((task, index) => (
              <TaskCard key={index} task={task} markDone={completeTask} />
            ))}
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default TaskManager;
