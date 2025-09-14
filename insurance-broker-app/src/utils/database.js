import dotenv from 'dotenv';
import sqlite3 from 'sqlite3';

dotenv.config();

const db = new sqlite3.Database(process.env.DB_PATH || './insurance.db');

// Initialize tables
db.serialize(() => {
    // Companies table
    db.run(`
    CREATE TABLE IF NOT EXISTS companies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE
    )
  `);

    // Brokers table (foreign key to companies)
    db.run(`
    CREATE TABLE IF NOT EXISTS brokers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      company_id INTEGER NOT NULL,
      FOREIGN KEY (company_id) REFERENCES companies (id)
    )
  `);

    // Policies table (foreign key to companies; type for risk sharing categorization)
    db.run(`
    CREATE TABLE IF NOT EXISTS policies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      type TEXT NOT NULL, -- e.g., 'Auto', 'Home', 'Life'
      company_id INTEGER NOT NULL,
      FOREIGN KEY (company_id) REFERENCES companies (id)
    )
  `);
});

export default db;