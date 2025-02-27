require('dotenv').config();
const { Pool } = require('pg');

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
      console.error('Database connection failed, retry Atrempt : ', retries);
      retries--;
      await new Promise(res => setTimeout(res, 5000));
    }
  }
};

connectWithRetry();

module.exports = pool;
