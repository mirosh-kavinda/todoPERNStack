require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Retry database connection 
const connectWithRetry = async () => {
  let retries = 5;
  while (retries) {
    try {
      await pool.query('SELECT 1'); 
      console.log('Connected to PostgreSQL');
      return;
    } catch (err) {
      console.error('Database connection failed, retrying...', retries);
      retries--;
      await new Promise(res => setTimeout(res, 5000));
    }
  }
};

connectWithRetry();

// Routes
app.get('/tasks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM task WHERE completed = false ORDER BY created_at DESC LIMIT 5');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

app.post('/tasks', async (req, res) => {
  try {
    const { title, description } = req.body;
    await pool.query('INSERT INTO task (title, description) VALUES ($1, $2)', [title, description]);
    res.sendStatus(201);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

app.put('/tasks/:id/done', async (req, res) => {
  try {
    await pool.query('UPDATE task SET completed = true WHERE id = $1', [req.params.id]);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
