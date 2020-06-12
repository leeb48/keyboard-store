const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = require('express').Router();

// @route   /api/auth/register
// @info    Register new user
// @access  Public
router.post('/register', async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});
