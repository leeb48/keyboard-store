const jwt = require('jsonwebtoken');
const config = require('config');

const auth = async (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.send(401).send({ error: 'No Token' });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwt.secret'));

    req.user = decoded.user;

    next();
  } catch (err) {
    res.status(401).send({ error: err });
  }
};

module.exports = auth;
