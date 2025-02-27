import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskCard from "../components/taskCard";
import TaskForm from "../components/taskForm";
import taskRepository from "../repositories/taskRepo";


const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

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
    </div>
  );
};

export default TaskManager;