const pool = require('../utils/pool');

module.exports = class Post {
  id;
  title;
  content;
  gh_user_id;

  constructor(row) {
    this.id = row.id,
    this.title = row.content,
    this.content = row.content,
    this.gh_user_id = row.gh_user_id;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM posts;');
    return rows.map((row) => new Post(row));
  }

  static async insert({ title, content, gh_user_id }) {
    const { rows } = await pool.query(
      `
      INSERT INTO posts (title, content, gh_user_id) 
      VALUES ($1, $2, $3)
      RETURNING *;
      `,
      [title, content, gh_user_id]
    );
    return new Post(rows[0]);
  }
};

