const { Router } = require('express');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');
const Post = require('../models/Post')

module.exports = Router()
  .get('/', authenticate, async (req, res, next) => {
    try {
      const posts = await Post.getAll();
      const ids = posts.map((post) => ({ id: post.id, title: post.title, content: post.content }));
      res.json(ids);
    } catch (e) {
      next (e);
    }
  })
  .post('/', authenticate, async (req, res, next) => {
    try {
      const newPost = await Post.insert(req.body, req.params.id);
    }
  });


