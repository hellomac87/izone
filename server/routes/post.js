const express = require("express");
const router = express.Router();
const Post = require("../models/post");

// const { auth } = require("../middleware/auth");

//=================================
//             Post
//=================================

// router.get("/auth", auth, (req, res) => {
//   res.send("auth");
// });

router.get("/", (req, res) => {});
// write
router.post("/", async (req, res) => {
  const { title, body, tags } = req.body;
  const post = new Post({
    title,
    body,
    tags,
  });

  try {
    const data = await post.save();
    res.status(200).json({ success: true, data });
  } catch (e) {
    console.log(e);
    res.status(400).json({ success: false, message: e });
  }
});

router.get("/:id", (req, res) => {});
router.delete("/", (req, res) => {});
router.put("/:id", (req, res) => {});

module.exports = router;
