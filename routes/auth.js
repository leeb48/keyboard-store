const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');

const router = require('express').Router();

// @route   /api/auth/login
// @info    Login user
// @access  Public
router.post(
  '/login',
  [
    check('username', 'Please Enter a Valid Email').isEmail(),
    check('password', 'Passwords Must Be At Least 5 Characters').isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }

      const { username, password } = req.body;

      //  Find the user in the database
      let user = await User.findOne({ username });

      if (!user) {
        return res.status(400).json({
          errors: [
            {
              msg: 'Invalid Credentials',
            },
          ],
        });
      }

      //  Compare the passwords
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      //  Send token
      const payload = {
        user: user.id,
      };

      jwt.sign(
        payload,
        config.get('jwt.secret'),
        { expiresIn: '1h' },
        (err, token) => {
          if (err) {
            return res.status(500).json({ errors: [{ msg: err.message }] });
          }

          return res.json({ token });
        }
      );
    } catch (err) {
      console.log(err);
      res.status(500).send({ error: err.message });
    }
  }
);

// @route   /api/auth/register
// @info    Register new user
// @access  Public
router.post(
  '/register',
  [
    check('username', 'Invalid Username. Please Enter a Valid Email').isEmail(),
    check('password', 'Passwords Must Be At Least 5 Characters').isLength({
      min: 5,
    }),
    check('favoriteSwitchType', 'Must Have A Favorite Switch Type')
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    try {
      //  Perform validation
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }

      const { username, password, favoriteSwitchType } = req.body;

      //  Check if the username alreay exists
      let user = await User.findOne({ username });

      if (user) {
        return res.status(400).json({
          errors: [
            {
              msg: 'Username Already Exists',
            },
          ],
        });
      }

      //  Encrypt password
      const hash = await bcrypt.hash(password, 10);

      //  Create new user
      user = new User({
        username,
        password: hash,
        favoriteSwitchType,
      });

      await user.save();

      //  Send jwt
      const payload = {
        user: user.id,
      };

      jwt.sign(
        payload,
        config.get('jwt.secret'),
        {
          expiresIn: '1h',
        },
        (err, token) => {
          if (err) {
            return res.status(500).json({ error: err.message });
          }

          return res.json({ token, username, favoriteSwitchType });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send({ error: err.message });
    }
  }
);

module.exports = router;
