const TaskModel = require('../models/taskModel');

const dataBaseErrorMsg = "Database error";

const TaskController = {
  getTasks: async (req, res) => {
    try {
      const { limit = 5, offset = 0 } = req.query;
      const tasks = await TaskModel.getAllTasks(limit, offset);
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: dataBaseErrorMsg });
    }
  },

  createTask: async (req, res) => {
    try {
      const { title, description } = req.body;
      await TaskModel.createTask(title, description);
      res.sendStatus(201);
    } catch (error) {
      res.status(500).json({ error: dataBaseErrorMsg });
    }
  },

  updateTask: async (req, res) => {
    try {
      const { completed } = req.body;
      await TaskModel.updateTaskStatus(req.params.id, completed);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: dataBaseErrorMsg });
    }
  },
};

module.exports = TaskController;
