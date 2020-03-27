const express = require("express");
const router = express.Router();
const { User } = require("../models/User");

// const { auth } = require("../middleware/auth");

//=================================
//             User
//=================================

// router.get("/auth", auth, (req, res) => {
//   res.send("auth");
// });

module.exports = router;
