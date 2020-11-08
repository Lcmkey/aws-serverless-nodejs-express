const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {
  const { JWT_SECRET } = process.env;
  let token = req.headers["x-access-token"] || req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Auth token is not supplied",
    });
  }

  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "Token is not valid",
      });
    }

    req.decoded = decoded;
    return next();
  });
};

module.exports = { checkToken };
