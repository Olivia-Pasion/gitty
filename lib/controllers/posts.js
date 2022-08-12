const { Router } = require('express');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');

module.exports = Router()
  .get('/', async (req, res) => {
    res.redirect(
      `https://github.come/p`
    )
  })



