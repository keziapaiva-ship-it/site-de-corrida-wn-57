const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

console.log("authController:", authController);
console.log("login:", authController.login);

router.post("/login", authController.login);

module.exports = router;