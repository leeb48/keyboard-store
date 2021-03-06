const router = require('express').Router();
const auth = require('../middleware/auth');
const Keyboard = require('../models/Keyboard');
const User = require('../models/User');

// @route   /api/user/cart
// @info    Add items to user's cart
// @access  Private
router.put('/cart', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user);

    // Save the reference id of the keyboard in the user's cart
    const { keyboardId } = req.body;

    // Check to see if the item is already in the user's cart
    if (user.cart.length > 0) {
      const item = user.cart.find((id) => id.equals(keyboardId));
      if (item) {
        return res.status(500).send({ error: 'Item Already In Cart' });
      }
    }

    user.cart.unshift(keyboardId);

    await user.save();

    return res.json('Item Added');
  } catch (err) {
    res.status(500).send({ error: err.message });
    console.log(err.message);
  }
});

// @route   api/user/cart/:id
// @info    Remove a keyboard from user's cart
// @access  Private
router.delete('/cart/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;

    let user = await User.findById(req.user);

    user.cart = user.cart.filter(
      (keyboardId) => id.toString() !== keyboardId.toString()
    );

    await user.save();

    return res.status(200).json('Item Removed');
  } catch (err) {
    res.status(500).send({ error: err.message });
    console.log(err.message);
  }
});

// @route   /api/user/cart
// @info    Get the items in the user's cart
// @access  Private
router.get('/cart', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user).populate('cart');

    return res.json(user.cart);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
