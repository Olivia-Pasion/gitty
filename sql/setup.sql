-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS github_users;

CREATE TABLE github_users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  username TEXT NOT NULL,
  email TEXT,
  avatar TEXT
);

INSERT INTO github_users (username, email) VALUES
  ('bob', 'bob@bob');



CREATE TABLE posts (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  gh_user_id BIGINT,
  FOREIGN KEY (gh_user_id) REFERENCES github_users(id)
);

INSERT INTO posts (title, content, gh_user_id) VALUES
  ('Weather Forecast', 'Sunny clear sky and hot', '1'),
  ('Favorite Colors', 'any shade of blue', '1');





