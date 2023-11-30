const express = require("express");
const { getUsers, login, register } = require("../controllers/user.controller");
const { upload } = require("../../middlewares/files.middleware");
const { isAuth } = require ("../../middlewares/auth.middleware");

const UserRouter = express.Router();

UserRouter.get("/", [isAuth], getUsers);
UserRouter.post("/register", upload.single("avatar"), register);
UserRouter.post("/login", login);

module.exports = UserRouter;
