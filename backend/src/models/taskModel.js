const pool = require('../config/postgreDb');

const TaskModel = {
  getAllTasks: async (limit, offset) => {
    const result = await pool.query(
      'SELECT * FROM task WHERE completed = false ORDER BY created_at DESC LIMIT $1 OFFSET $2',
      [limit, offset]
    );
    return result.rows;
  },

  createTask: async (title, description) => {
    await pool.query(
      'INSERT INTO task (title, description) VALUES ($1, $2)',
      [title, description]
    );
  },

  updateTaskStatus: async (id, completed) => {
    await pool.query('UPDATE task SET completed = $1 WHERE id = $2', [
      completed,
      id,
    ]);
  },
};

module.exports = TaskModel;
