const pool = require('express');

module.exports = class Post {
  id;
  title;
  content;

  constructor(row) {
    this.id = row.id,
    this.title = row.content,
    this.content = row.content;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM posts;');
    return rows.map((row) => new Post(row));
  }
};

