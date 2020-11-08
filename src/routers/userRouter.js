const { Router } = require("express");

const routes = Router({
  mergeParams: true,
});

const users = [
  {
    username: "sam.leung",
    gender: "M",
  },
];

routes.get("/", (req, res) => {
  res.status(200).json(users);
});

module.exports = {
  routes,
};
