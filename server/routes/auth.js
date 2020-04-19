const express = require("express");
const router = express.Router();
const { User } = require("../models/user");

// const { auth } = require("../middleware/auth");

//=================================
//             User
//=================================

// router.get("/auth", auth, (req, res) => {
//   res.send("auth");
// });

router.post("/register", (req, res) => {
  const { email, password, password_confirm } = req.body;
  if (!email)
    res
      .status(400)
      .json({ success: false, message: "email은(는) 필수 항목입니다." });
  if (!password)
    res
      .status(400)
      .json({ success: false, message: "password은(는) 필수 항목입니다." });

  res.status(200).json({ success: true });
});

module.exports = router;
