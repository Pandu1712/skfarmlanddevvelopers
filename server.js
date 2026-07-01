import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import db from './backend/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/projects', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM projects');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching projects:', err);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

app.get('/api/gallery', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM gallery');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching gallery:', err);
    res.status(500).json({ error: 'Failed to fetch gallery' });
  }
});

// Serve static React files in production
app.use(express.static(path.join(__dirname, 'dist')));

// Fallback for React Router (if using one in the future) or state-based single page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Create tables on startup if they don't exist
async function initDb() {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS projects (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        location VARCHAR(255),
        distance VARCHAR(255),
        price VARCHAR(100),
        size VARCHAR(100),
        image TEXT,
        type VARCHAR(50),
        status VARCHAR(50),
        features JSON
      )
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS gallery (
        id VARCHAR(100) PRIMARY KEY,
        title VARCHAR(255),
        category VARCHAR(100),
        image TEXT,
        description TEXT
      )
    `);
    
    console.log('Database tables verified.');
  } catch (error) {
    console.error('Database initialization failed:', error);
  }
}

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await initDb();
});
