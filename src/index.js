require("dotenv").config();
require("module-alias/register");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

/**
 * Custom Import
 */
const { checkToken } = require("@middleware/auth");
const { routes: userRouter } = require("@routers/userRouter");
const { routes: loginRouter } = require("@routers/loginRouter");

// const PORT = process.env.APP_PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/login", loginRouter);
app.use("/user", checkToken, userRouter);

/**
 * Local Test
 */
// app.listen(PORT);

module.exports = app;
