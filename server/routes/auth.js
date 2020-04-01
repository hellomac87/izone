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

router.post("/register", (req, res) => {
  console.log(req.body);
});

module.exports = router;
