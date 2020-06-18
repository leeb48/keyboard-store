const router = require('express').Router();
const auth = require('../middleware/auth');
const Keyboard = require('../models/Keyboard');

// @route   /api/store/sellkeyboard
// @info    Post a user's keyboard to sell
// @access  Private
router.post('/sellkeyboard', auth, async (req, res) => {
  try {
    const {
      name,
      img,
      description,
      price,
      inStock = true,
      featuredItem = false,
    } = req.body;

    const newKeyboard = new Keyboard({
      user: req.user,
      name,
      img,
      description,
      price,
      inStock,
      featuredItem,
    });

    await newKeyboard.save();

    return res.json(newKeyboard);
  } catch (err) {
    res.status(500).send({ error: err.message });
    console.log(err.message);
  }
});

// @route   /api/store/:id
// @info    Remove a keyboard from the store
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;

    const keyboard = await Keyboard.findById(id);

    if (!keyboard) {
      return res.status(404).send({ error: 'Cannot Find Keyboard' });
    }

    //  The user who posted the keyboard can remove
    if (keyboard.user.toString() !== req.user) {
      return res.status(401).send({ error: 'Not Authorized' });
    }

    await keyboard.remove();

    return res.json('Keyboard Removed');
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// @route   /api/store
// @info    Get all keyboards
// @access  Public
router.get('/', async (req, res) => {
  try {
    const keyboards = await Keyboard.find();

    return res.json(keyboards);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// @route   /api/store/search
// @info    Search for keyboard by name
// @access  Public
router.get('/search/:searchTerm', async (req, res) => {
  try {
    const { searchTerm } = req.params;

    const regexQuery = {
      name: new RegExp(searchTerm, 'i'),
    };

    const results = await Keyboard.find(regexQuery);

    return res.json(results);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// @route   /api/store/featured
// @info    Get all featured items
// @access  Public
router.get('/featured', async (req, res) => {
  try {
    const featured = await Keyboard.find({ featuredItem: true });

    return res.json(featured);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// @route   /api/store/incoming
// @info    Get all incoming stock items
// @access  Public
router.get('/incoming', async (req, res) => {
  try {
    const incoming = await Keyboard.find({ inStock: false });

    return res.json(incoming);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// @route   GET /api/store/new-arrival
// @info    Get newly arrived stock
// @access  Public
router.get('/new-arrival', async (req, res) => {
  try {
    const newArrival = await Keyboard.find({ inStock: true }).sort({
      date: -1,
    });

    return res.json(newArrival);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
