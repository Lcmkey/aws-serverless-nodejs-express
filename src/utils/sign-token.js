const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

const signToken = (id) => jwt.sign({ id, iat: Date.now() }, JWT_SECRET);

module.exports = {
  signToken,
};
