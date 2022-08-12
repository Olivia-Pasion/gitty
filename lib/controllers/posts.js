const { Router } = require('express');
//const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');
const Post = require('../models/Post');

module.exports = Router()
  .get('/', authenticate, async (req, res, next) => {
    try {
      const posts = await Post.getAll();
      console.log('should be posts:', posts);
      const ids = posts.map((post) => ({ id: post.id, title: post.title, content: post.content, gh_user_id: post.gh_user_id }));
      res.json(ids);
    } catch (e) {
      next (e);
    }
  })
  .post('/', authenticate, async (req, res, next) => {
    try {
      const data = { ...req.body, gh_user_id: req.user.id };
      const newPost = await Post.insert(data);
      res.json(newPost);
    } catch (e) {
      next (e);
    }
  });


