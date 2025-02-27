const express = require('express');
const TaskController = require('../controllers/taskController');

const router = express.Router();

router.get('/tasks', TaskController.getTasks);
router.post('/tasks', TaskController.createTask);
router.patch('/tasks/:id', TaskController.updateTask);

module.exports = router;
