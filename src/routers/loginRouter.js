const { Router } = require("express");
const { signToken } = require("@utils/sign-token");

const routes = Router({
  mergeParams: true,
});

routes.post("/", (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    res.status(401).json({
      success: false,
      message: "Login Fail",
    });
  }

  res.status(200).json({ "x-access-token": signToken(userId) });
});

module.exports = {
  routes,
};
